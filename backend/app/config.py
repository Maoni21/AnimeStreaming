import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    # Configuration de base
    SECRET_KEY = os.getenv('SECRET_KEY', os.urandom(24).hex())

    # Configuration de la base de données
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://user:password@db:5432/mydatabase')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Configuration JWT
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', os.urandom(24).hex())
    JWT_ACCESS_TOKEN_EXPIRES = 3600  # 1 heure

    # Configuration CORS
    CORS_HEADERS = 'Content-Type'
    CORS_ORIGINS = ["http://localhost:3000"]

class DevelopmentConfig(Config):
    DEBUG = True
    DEVELOPMENT = True

class ProductionConfig(Config):
    DEBUG = False
    DEVELOPMENT = False

class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://user:password@db:5432/test_db'

# Dictionnaire des configurations
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
    'default': DevelopmentConfig
}