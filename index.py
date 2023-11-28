from flask import Flask, request, jsonify, render_template
from dataclasses import dataclass

app = Flask(__name__)

@dataclass
class User:
    first_name: str
    last_name: str
    email: str
    password: str
    is_admin: bool = False

users = {
    'user1@example.com': User('John', 'Doe', 'user1@example.com', 'password123', False),
    'user2@example.com': User('Jane', 'Doe', 'user2@example.com', 'password123', False),
    'admin@example.com': User('Admin', 'User', 'admin@example.com', 'adminpass', True)
}

"""Displays an HTML welcome page for the app"""
@app.route('/')
def home():
    return render_template('welcome.html')

"""
Create a new users and add them to the in memory database
Required data in request header:
    first_name: str
    last_name: str
    email: str
    password: str
"""
@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.json
    if not data or 'email' not in data:
        return jsonify({'message' : 'Missing data'}), 400
    
    if data['email'] in users:
        return jsonify({'message' " Email already exist"}), 400
    
    user = User(data['first_name'], data['last_name'], data['email'], data['password'])
    users[user.email] = user

    return jsonify({'message' : 'User created successfully'}), 200


"""Get user info from unique idenifier (email right now)"""
@app.route('/user/<email>', methods=['GET'])
def get_user(email):
    user = users.get(email)
    if user:
        return jsonify({
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email,
            'password': user.password
        })
    else:
        return jsonify({'message' : 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
    