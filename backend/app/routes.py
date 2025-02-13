from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from .models import db, User

auth = Blueprint('auth', __name__)

@auth.route('/api/auth/register', methods=['POST', 'OPTIONS'])
@cross_origin(origins=['http://localhost:3000'], supports_credentials=True)
def register():
    if request.method == "OPTIONS":
        return jsonify({"message": "OK"}), 200

    try:
        data = request.get_json()
        if not data:
            return jsonify({"message": "Données invalides"}), 400

        # Vérification si l'utilisateur existe déjà
        if User.query.filter_by(email=data.get('email')).first():
            return jsonify({"message": "Email déjà utilisé"}), 400

        # Création de l'utilisateur
        user = User(
            username=data.get('username'),
            email=data.get('email')
        )
        user.set_password(data.get('password'))

        db.session.add(user)
        db.session.commit()

        return jsonify({"message": "Inscription réussie"}), 201

    except Exception as e:
        print(f"Erreur: {str(e)}")  # Pour le debugging
        return jsonify({"message": "Erreur serveur"}), 500