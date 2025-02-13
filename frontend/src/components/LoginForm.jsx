import React, { useState } from 'react';
import { X } from 'lucide-react';

const LoginForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include',
                mode: 'cors',
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                }),
            });

            console.log('Status:', response.status);
            const data = await response.json();
            console.log('Response:', data);

            if (response.ok) {
                alert('Inscription réussie!');
                onClose(); // Fermer le formulaire après succès
            } else {
                alert(data.message || 'Erreur lors de l\'inscription');
            }
        } catch (error) {
            console.error('Erreur détaillée:', error);
            alert('Erreur de connexion au serveur');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Fond flouté */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>

            {/* Formulaire */}
            <div className="relative bg-white p-8 rounded-lg shadow-xl w-96">
                {/* Bouton fermeture */}
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-lg"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Connexion</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Se connecter
                    </button>
                </form>
            </div>
        </div>
    );
};

const RegisterForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include',
                mode: 'cors',
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                }),
            });

            console.log('Status:', response.status);
            const data = await response.json();
            console.log('Response:', data);

            if (response.ok) {
                alert('Inscription réussie!');
                onClose(); // Fermer le formulaire après succès
            } else {
                alert(data.message || 'Erreur lors de l\'inscription');
            }
        } catch (error) {
            console.error('Erreur détaillée:', error);
            alert('Erreur de connexion au serveur');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Fond flouté */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>

            {/* Formulaire */}
            <div className="relative bg-white p-8 rounded-lg shadow-xl w-96">
                {/* Bouton fermeture */}
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors shadow-lg"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Inscription</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Nom d'utilisateur</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={formData.username}
                            onChange={(e) => setFormData({...formData, username: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Confirmer le mot de passe</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>
    );
};

export { LoginForm, RegisterForm };