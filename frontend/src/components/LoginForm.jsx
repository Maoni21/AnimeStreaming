import React, { useState } from 'react';
import { X } from 'lucide-react';
import { validateEmail, validatePassword } from '../utils/validators';
import { formatError } from '../utils/formatters';
import { MESSAGES, API_ENDPOINTS } from '../utils/constants';
import { useAuth } from '../contexts/AuthContext';

const LoginForm = ({ onClose }) => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors({});

        // Validation
        if (!validateEmail(formData.email)) {
            setFormErrors(prev => ({ ...prev, email: MESSAGES.INVALID_EMAIL }));
            return;
        }

        const passwordValidation = validatePassword(formData.password);
        if (!passwordValidation.isValid) {
            setFormErrors(prev => ({ ...prev, password: passwordValidation.message }));
            return;
        }

        try {
            await login({
                email: formData.email,
                password: formData.password
            });
            onClose();
        } catch (error) {
            console.error('Erreur détaillée:', error);
            setFormErrors({ submit: formatError(error) });
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative bg-white p-8 rounded-lg shadow-xl w-96">
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
                            className={`w-full p-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                        {formErrors.email && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
                        <input
                            type="password"
                            className={`w-full p-2 border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            required
                        />
                        {formErrors.password && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
                        )}
                    </div>
                    {formErrors.submit && (
                        <div className="text-red-500 text-sm text-center">{formErrors.submit}</div>
                    )}
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
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors({});

        // Validations
        if (!validateEmail(formData.email)) {
            setFormErrors(prev => ({ ...prev, email: MESSAGES.INVALID_EMAIL }));
            return;
        }

        const passwordValidation = validatePassword(formData.password);
        if (!passwordValidation.isValid) {
            setFormErrors(prev => ({ ...prev, password: passwordValidation.message }));
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setFormErrors(prev => ({ ...prev, confirmPassword: "Les mots de passe ne correspondent pas" }));
            return;
        }

        try {
            await register({
                username: formData.username,
                email: formData.email,
                password: formData.password
            });
            onClose();
        } catch (error) {
            console.error('Erreur détaillée:', error);
            setFormErrors({ submit: formatError(error) });
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>

            <div className="relative bg-white p-8 rounded-lg shadow-xl w-96">
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
                            className={`w-full p-2 border ${formErrors.username ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
                            value={formData.username}
                            onChange={(e) => setFormData({...formData, username: e.target.value})}
                            required
                        />
                        {formErrors.username && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.username}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            className={`w-full p-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                        {formErrors.email && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Mot de passe</label>
                        <input
                            type="password"
                            className={`w-full p-2 border ${formErrors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            required
                        />
                        {formErrors.password && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Confirmer le mot de passe</label>
                        <input
                            type="password"
                            className={`w-full p-2 border ${formErrors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                            required
                        />
                        {formErrors.confirmPassword && (
                            <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>
                        )}
                    </div>
                    {formErrors.submit && (
                        <div className="text-red-500 text-sm text-center">{formErrors.submit}</div>
                    )}
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