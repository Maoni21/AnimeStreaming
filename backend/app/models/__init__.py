from flask_sqlalchemy import SQLAlchemy

# Créez l'instance de db
db = SQLAlchemy()

# Importez les modèles ici pour s'assurer qu'ils sont chargés
from .user import User