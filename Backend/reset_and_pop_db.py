# Once you have the DB set up and you can access it run this script to add
# tables and some data

from index import app, db, User, Admin 

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
            user = User(name=user_data['name'], email=user_data['email'], password=user_data['password'])
            db.session.add(user)

        for admin_data in admin:
            admin = Admin(name=admin_data['name'], email=admin_data['email'])
            db.session.add(admin)
        # Commit the changes to the database
        db.session.commit()