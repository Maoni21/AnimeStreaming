from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from ..models import db, User
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

# Ajout du préfixe '/api/auth'
auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')

@auth_bp.route('/register', methods=['OPTIONS'])
@cross_origin()
def register_options():
    return jsonify(success=True), 200

@auth_bp.route('/register', methods=['POST'])
@cross_origin()
def register():
    try:
        data = request.get_json()

        # Vérification des données requises
        if not all(key in data for key in ['username', 'email', 'password']):
            return jsonify({'message': 'Données manquantes'}), 400

        # Vérification si l'utilisateur existe déjà
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'message': 'Email déjà utilisé'}), 400

        if User.query.filter_by(username=data['username']).first():
            return jsonify({'message': "Nom d'utilisateur déjà utilisé"}), 400

        # Création du nouvel utilisateur
        user = User(
            username=data['username'],
            email=data['email']
        )
        user.set_password(data['password'])

        # Sauvegarde dans la base de données
        db.session.add(user)
        db.session.commit()

        return jsonify({'message': 'Inscription réussie'}), 201

    except Exception as e:
        db.session.rollback()
        print(f"Erreur lors de l'inscription: {str(e)}")
        return jsonify({'message': 'Erreur serveur'}), 500

@auth_bp.route('/login', methods=['OPTIONS'])
@cross_origin()
def login_options():
    return jsonify(success=True), 200

@auth_bp.route('/login', methods=['POST'])
@cross_origin()
def login():
    try:
        data = request.get_json()

        # Vérification des données requises
        if not all(key in data for key in ['email', 'password']):
            return jsonify({'message': 'Email et mot de passe requis'}), 400

        # Recherche de l'utilisateur
        user = User.query.filter_by(email=data['email']).first()

        # Vérification du mot de passe
        if user and user.check_password(data['password']):
            # Création du token JWT
            access_token = create_access_token(identity=user.id)
            return jsonify({
                'message': 'Connexion réussie',
                'token': access_token,
                'user': user.to_dict()
            }), 200

        return jsonify({'message': 'Email ou mot de passe incorrect'}), 401

    except Exception as e:
        print(f"Erreur lors de la connexion: {str(e)}")
        return jsonify({'message': 'Erreur serveur'}), 500

@auth_bp.route('/profile', methods=['OPTIONS'])
@cross_origin()
def profile_options():
    return jsonify(success=True), 200

@auth_bp.route('/profile', methods=['GET'])
@cross_origin()
@jwt_required()
def profile():
    try:
        # Récupération de l'ID de l'utilisateur depuis le token JWT
        current_user_id = get_jwt_identity()
        user = User.query.get(current_user_id)

        if not user:
            return jsonify({'message': 'Utilisateur non trouvé'}), 404

        return jsonify(user.to_dict()), 200

    except Exception as e:
        print(f"Erreur lors de la récupération du profil: {str(e)}")
        return jsonify({'message': 'Erreur serveur'}), 500