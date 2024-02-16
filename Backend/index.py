from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy
import pymysql

app = Flask(__name__)

# MySQL configurations using SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost:3333/test'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# MySQL configuration for pymysql and the insecure_user_search endpoint for SQL injection
 # Connect to the database
connection = pymysql.connect(host='localhost',
                                port=3333,
                                user='root',
                                password='root',
                                db='test',
                                charset='utf8mb4',
                                cursorclass=pymysql.cursors.DictCursor)

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

# """Displays an HTML welcome page for the app"""
# @app.route('/')
# def home():
#     return render_template('welcome.html')

# @app.route('/sign_up')
# def sign_up():
#     return render_template('sign_up.html')

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
    

# @app.route('/user_search_page')
# def show_student_search():
#     return render_template('user_search.html')
    
# This endpoint should open to sql injection 
@app.route('/insecure_user_search', methods=['GET'])
def insecure_user_search():
    
    data = request.json
    email = data.get('email')

    try:
        with connection.cursor() as cursor:
            # Insecure way of forming SQL query - directly inserting user input into the query
            sql_query = f"SELECT * FROM User WHERE email = '{email}'"
            cursor.execute(sql_query)
            result = cursor.fetchone()
            if result:
                response = f"Executed query: {sql_query}\nResult: {result}"
                return response
            else:
                return "No user found", 404
    finally:
        connection.close()
    
# Insecure route that will give you data about a user
# It is password protected but URL is visible giving far
# to much information about the endpoint. 
@app.route('/user_search/<email>/<password>', methods=['GET'])
def user_search(email, password):
    user = get_user(email)

    if user and user.password == password:
        
        user_info = f"ID: {user.id}, Name: {user.name}, Email: {user.email}, Password: {user.password}"
        
        return user_info, 200
    else:
        return "User not found or incorrect password", 404

    
# Need to create a form or find a new way to todo this. 
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

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
    