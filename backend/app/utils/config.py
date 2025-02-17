import os
from datetime import timedelta

class Config:
    """Configuration de base"""
    # Configuration Flask
    SECRET_KEY = os.getenv('SECRET_KEY', os.urandom(24).hex())

    # Configuration Base de données
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://user:password@db:5432/mydatabase')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Configuration JWT
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', os.urandom(24).hex())
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)

    # Configuration CORS
    CORS_HEADERS = ['Content-Type', 'Authorization']
    CORS_ORIGINS = ["http://localhost:3000"]
    CORS_SUPPORTS_CREDENTIALS = True

class DevelopmentConfig(Config):
    """Configuration pour le développement"""
    DEBUG = True
    DEVELOPMENT = True

class ProductionConfig(Config):
    """Configuration pour la production"""
    DEBUG = False
    DEVELOPMENT = False

    # En production, assurez-vous que ces valeurs sont définies dans les variables d'environnement
    SECRET_KEY = os.getenv('SECRET_KEY')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')

class TestingConfig(Config):
    """Configuration pour les tests"""
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://user:password@db:5432/test_db'

# Dictionnaire des configurations disponibles
config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
    'default': DevelopmentConfig
}