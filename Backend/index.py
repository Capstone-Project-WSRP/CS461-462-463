from flask import Flask, abort, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import pymysql
import requests

app = Flask(__name__)
CORS(app)
# MySQL configurations using SQLAlchemy

####################### First one is for docker deploy ######################################
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@db:3306/website_security_database_ERD'
#############################################################################################

# This one is for local dev
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost:3333/website_security_database_ERD'
#####################################################################################

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

limiter = Limiter(
    app=app,
    key_func=get_remote_address,  # This function uses the client IP address for rate limiting
    default_limits=["200 per day", "50 per hour"]
)
# Define a model for your table
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))

    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password


class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))

    def __init__(self, name, email):
        self.name = name
        self.email = email


def get_user(email):
    return User.query.filter_by(email=email).first()


def Reset():
    with app.app_context():
        # Drop all existing tables to reset the database
        db.drop_all()

        # Recreate all tables
        db.create_all()

        # List of user data to add
        users = [
            {'name': 'Alice', 'email': 'alice@example.com', 'password': "Alice1234"},
            {'name': 'Bob', 'email': 'bob@example.com', 'password': "Bob1234"},
            # Add more users as needed
        ]

        # List of admin data to add
        admin = [
            {'name': 'Admin1', 'email': 'admin1@example.com'},
            {'name': 'Admin2', 'email': 'admin2@example.com'},
            # Add more admin as needed
        ]

        # Add users to the database
        for user_data in users:
            user = User(name=user_data['name'], email=user_data['email'],
                        password=user_data['password'])
            db.session.add(user)

        for admin_data in admin:
            admin = Admin(name=admin_data['name'], email=admin_data['email'])
            db.session.add(admin)
        # Commit the changes to the database
        db.session.commit()


@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    # Check that email is unique 
    unique = get_user(email)
    if unique:
        return {"error": "Email already exists"}, 409

    # Create new User instance and add to database
    new_user = User(name, email, password)
    db.session.add(new_user)
    db.session.commit()

    return {"message": f"{name} was added successfully"}, 201


@app.route('/sm_insecure_creation', methods=['POST'])
def sm_insecure_creation():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')

    # Check that email is unique
    existing = get_user(email)

    if not existing:
        # Create new User instance and add to database
        new_user = User(name, email, password)
        db.session.add(new_user)
        db.session.commit()
        return {"message": f"{name} was added successfully"}, 201

    else:
        return {"message": "An account is already associated with this email.",
                "debug_error_message": f"An account is already associated "
                                       f"with this email - "
                                       f"Name: {existing.name}, "
                                       f"Email: {existing.email}, "
                                       f"Password: {existing.password}"
                }, 200


# This endpoint be should open to sql injection 
@app.route('/insecure_user_search', methods=['POST'])
def insecure_user_search():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    try:
        # for docker compose to work uncomment this and comment out the other
        # connection = pymysql.connect(host='db',
        #                              port=3306,
        #                              user='root',
        #                              password='root',
        #                              db='test',
        #                              charset='utf8mb4',
        #                              cursorclass=pymysql.cursors.DictCursor)
        # Connect to the database for dev
        connection = pymysql.connect(host='localhost',
                                     port=3333,
                                     user='root',
                                     password='root',
                                     db='website_security_database_ERD',
                                     charset='utf8mb4',
                                     cursorclass=pymysql.cursors.DictCursor)

        with connection.cursor() as cursor:
            # Insecure way of forming SQL query - directly inserting user input into the query
            sql_query = f"SELECT * FROM user WHERE email = '{email}' AND password = '{password}'"
            cursor.execute(sql_query)
            result = cursor.fetchone()
            if result:
                # response = {"Executed_query": sql_query, "Result": True}
                response = result
                print("response:", response)
                return jsonify(response), 200
            else:
                return jsonify("No user found"), 404
    finally:
        connection.close()


# Insecure route that will give you data about a user
# It is password protected but URL is visible giving far
# to much information about the endpoint. 
@app.route('/user_search/<email>/<password>', methods=['GET'])
def user_search(email, password):
    user = get_user(email)

    if user and user.password == password:
        user_info = {
            "ID": user.id,
            "Name": user.name,
            "Email": user.email,
            "Password": user.password
        }
        return jsonify(user_info), 200
    else:
        return jsonify(
            {"message": "User not found or incorrect password"}), 404
    
# Secure user search
@app.route('/user_search_secure', methods=['POST'])
@limiter.limit("5 per minute")
def user_search_secure():
    if request.method == 'POST':
        data = request.json
        email = data.get("email")
        password = data.get("password")
        if not email or not password:
            abort(400, description="Missing email or password")

        user = get_user(email)
        if user and user.password == password:
            user_info = {
                "ID": user.id,
                "Name": user.name,
                "Email": user.email
            }
            return jsonify(user_info), 200
        else:
            return jsonify({"message": "Invalid login credentials"}), 401
    else:
        abort(405)  # Method Not Allowed for non-POST requests


@app.route('/user_edit', methods=['PUT'])
def user_edit():
    # Extract email, current_password, and new_password from JSON body of the request
    data = request.json
    email = data['email']
    current_password = data['current_password']
    new_password = data['new_password']

    user = get_user(email)

    if user and user.password == current_password:
        # Update the user's password
        user.password = new_password
        db.session.commit()
        return {'message': f'Password updated successfully for {email}'}, 200
    else:
        return {"error": "Incorrect email or password"}, 404


@app.route('/user_delete', methods=['DELETE'])
def user_delete():
    # Extract email and password from JSON body of the request
    data = request.json
    email = data['email']
    password = data['password']

    user = get_user(email)
    if user and user.password == password:
        db.session.delete(user)
        db.session.commit()
        return {'message': f'User {email} deleted successfully'}, 200
    else:
        return {"error": "User not found or incorrect password"}, 404


@app.route('/resetDB', methods=['GET'])
def reset():
    try:
        Reset()
        return jsonify({'message': 'Database has been successfully reset'}), \
               200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/fetch_file', methods=['POST'])
def fetch_file():
    url = request.json.get('url')

    try:
        response = requests.get(url)
        if response.ok:
            file_content = response.content.decode('utf-8')
            return jsonify({'file_content': file_content}), 200
        else:
            return jsonify({'error': 'Failed to fetch file'}), 500
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
