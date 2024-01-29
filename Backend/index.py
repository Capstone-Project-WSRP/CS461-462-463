from flask import Flask, request, render_template, flash, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# MySQL configurations using SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@127.0.0.7:3333/test'
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

"""Displays an HTML welcome page for the app"""
@app.route('/')
def home():
    return render_template('welcome.html')

@app.route('/sign_up')
def sign_up():
    return render_template('sign_up.html')

@app.route('/create_user/<name>/<email>/<password>', methods=['POST','GET'])
def create_user(name, email, password):
    
    # Check that email is unique 
    unique = get_user(email)
    if unique:
        return "Email already exists", 409
    
    else:
        # Create new User instance and add to database
        new_user = User(name, email, password)
        db.session.add(new_user)
        db.session.commit()

        return f'{name} was added successfully<p><a href="/">Return Home</a></p>'
    

@app.route('/user_search_page')
def show_student_search():
    return render_template('user_search.html')
    
# Insecure route that will give you data about a user
# It is password protected but URL is visible giving far
# to much information about the endpoint. 
@app.route('/user_search/<email>/<password>', methods=['POST', 'GET'])
def user_search(email, password):
 
    user = get_user(email)

    if user and user.password == password:
        return render_template('user_info.html', user=user)
    else:
        return "User not found", 404
    
# Need to create a form or find a new way to todo this. 
@app.route('/user_edit/<email>/<password>', methods=['POST'])
def user_edit(email,password):
    # Logic to edit a user
    user = get_user(email)
    if user and user.password == password:
        # update data
        pass
    else:
        return "User not found", 404
   
@app.route('/user_delete/<email>/<password>', methods=['POST', 'GET'])
def user_delete(email, password):
    # Logic to delete user
    user = get_user(email)
    if user and user.password == password:
        db.session.delete(user)
        db.session.commit()
        return ("success")
    else:
        return "User not found", 404

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
    