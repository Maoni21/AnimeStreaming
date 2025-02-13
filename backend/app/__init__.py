from flask import Flask, jsonify
from flask_cors import CORS
from .models import db
from .routes import auth

def create_app():
    app = Flask(__name__)

    # Configuration CORS explicite
    app.config['CORS_HEADERS'] = 'Content-Type'
    CORS(app,
         resources={r"/api/*": {
             "origins": ["http://localhost:3000"],
             "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
             "allow_headers": ["Content-Type", "Authorization"],
             "supports_credentials": True
         }})

    # Configuration de la base de données
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@db:5432/mydatabase'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = 'votre-cle-secrete-tres-secrete'

    db.init_app(app)
    app.register_blueprint(auth)

    @app.route('/test', methods=['GET'])
    def test():
        return jsonify({"message": "API is working!"})

    return app