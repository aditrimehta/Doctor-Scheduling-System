from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows React to communicate with Flask

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="mysql",
    database="mydatabase"
)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    cursor = db.cursor()
    query = "SELECT password FROM users WHERE email = %s"
    cursor.execute(query, (email,))
    result = cursor.fetchone()

    if result:
        stored_password = result[0]

        if stored_password == password:
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"message": "Incorrect password"}), 401
    else:
        return jsonify({"message": "User not found"}), 404



@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    cursor = db.cursor()
    
    # Check if email already exists
    cursor.execute("SELECT email FROM users WHERE email = %s", (email,))
    existing_user = cursor.fetchone()

    if existing_user:
        return jsonify({"message": "User already exists"}), 409  # Conflict error

    # Insert new user
    query = "INSERT INTO users (name, email, password) VALUES (%s, %s, %s)"
    cursor.execute(query, (name, email, password))
    db.commit()

    return jsonify({"message": "Signup successful"}), 201  # Created status


if __name__ == '__main__':
    app.run(debug=True)
