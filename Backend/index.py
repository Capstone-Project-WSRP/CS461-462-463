from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)
# MySQL configurations using SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost:3333/test'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define a model for your table
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))

    def __init__(self, name, email,password):
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
    
# This endpoint should open to sql injection 
@app.route('/insecure_user_search', methods=['POST'])
def insecure_user_search():
    
    data = request.json
    email = data.get('email')

    try:
        # Connect to the database
        connection = pymysql.connect(host='localhost',
                                        port=3333,
                                        user='root',
                                        password='root',
                                        db='test',
                                        charset='utf8mb4',
                                        cursorclass=pymysql.cursors.DictCursor)
        
        with connection.cursor() as cursor:
            # Insecure way of forming SQL query - directly inserting user input into the query
            sql_query = f"SELECT * FROM user WHERE email = '{email}'"
            cursor.execute(sql_query)
            result = cursor.fetchone()
            if result:
                response = {"Executed query": sql_query,"Result": True}
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
        # Correctly create the dictionary without using curly braces for the values
        user_info = {
            "ID": user.id,
            "Name": user.name,
            "Email": user.email,
            "Password": user.password
        }
        
        # Use jsonify to correctly return JSON response
        return jsonify(user_info), 200
    else:
        return jsonify({"message": "User not found or incorrect password"}), 404

    
# Need to create a form or find a new way to todo this. 
@app.route('/user_edit', methods=['PUT'])
def user_edit():
    # Extract email, current_password, and new_password from JSON body of the request
    data = request.json
    email = data['email']
    current_password = data['current_password']
    new_password = data['new_password']
    
    user = get_user(email)
    # return {'messag': f'{}'}
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

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
    