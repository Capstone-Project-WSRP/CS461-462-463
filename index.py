from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    added_name = "Hrishikash Kadakia"
    print(f"My name is: {added_name}")
    return render_template('welcome.html')

if __name__ == '__main__':
    app.run(debug=True)
