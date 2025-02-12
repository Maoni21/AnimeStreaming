from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://admin:admin@db/mydatabase"
db = SQLAlchemy(app)

@app.route("/")
def home():
    return jsonify({"message": "Hello, Flask & PostgreSQL!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
