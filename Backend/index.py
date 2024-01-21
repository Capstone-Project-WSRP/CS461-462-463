from flask import Flask, request, render_template
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

    def __init__(self, name, email):
        self.name = name
        self.email = email

class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))

    def __init__(self, name, email):
        self.name = name
        self.email = email

"""Displays an HTML welcome page for the app"""
@app.route('/')
def home():
    return render_template('welcome.html')

@app.route('/sign_up')
def sign_up():
    return render_template('sign_up.html')

@app.route('/create_user', methods=['POST'])
def create_user():
   # Fetch form data
    name = request.form['name']
    email = request.form['email']

    # Create new User instance and add to database
    new_user = User(name, email)
    db.session.add(new_user)
    db.session.commit()

    return f'{name} was added successfully`<p><a href="/">Return Home</a></p>`'

# TODO: fix to work with new MySql Database

# """Get user info from unique idenifier (email right now)"""
# @app.route('/user/<email>', methods=['GET'])
# def get_user(email):
#     user = users.get(email)
#     if user:
#         return jsonify({
#             'first_name': user.first_name,
#             'last_name': user.last_name,
#             'email': user.email,
#             'password': user.password
#         })
#     else:
#         return jsonify({'message' : 'User not found'}), 404

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
    