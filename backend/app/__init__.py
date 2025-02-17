from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
import os
from dotenv import load_dotenv

# Initialisation des extensions (une seule fois)
db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()

def create_app():
    # Chargement des variables d'environnement
    load_dotenv()

    app = Flask(__name__)

    # Configuration de l'application
    app.config.update(
        SQLALCHEMY_DATABASE_URI=os.getenv('DATABASE_URL', 'postgresql://user:password@db:5432/mydatabase'),
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
        SECRET_KEY=os.getenv('SECRET_KEY', os.urandom(24).hex()),
        JWT_SECRET_KEY=os.getenv('JWT_SECRET_KEY', os.urandom(24).hex())
    )

    # Configuration CORS plus flexible
    CORS(app, resources={
        r"/api/*": {
            "origins": [
                "http://localhost:3000",
                "http://127.0.0.1:3000",
                "http://host.docker.internal:3000",
                "*"
            ],
            "supports_credentials": True,
            "allow_headers": [
                "Content-Type",
                "Authorization",
                "Access-Control-Allow-Origin"
            ],
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"]
        }
    })

    # Initialisation des extensions avec l'application
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # Import et enregistrement des blueprints
    from .routes.auth import auth_bp
    app.register_blueprint(auth_bp)

    @app.route('/api/health-check')
    def health_check():
        return {"status": "healthy"}, 200

    return app
