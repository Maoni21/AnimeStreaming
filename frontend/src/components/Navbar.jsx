import React, { useState } from "react";
import logo from "../asset/logo.svg";
import { LoginForm, RegisterForm } from './LoginForm';
import { useAuth } from '../contexts/AuthContext'; // Assurez-vous d'avoir ce contexte

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    // Utilisation du contexte d'authentification
    const { user, logout } = useAuth();

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowRegister(false);
    };

    const handleRegisterClick = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    const handleClose = () => {
        setShowLogin(false);
        setShowRegister(false);
    };

    return (
        <>
            <header className="bg-black text-white p-4 shadow-md flex items-center justify-between fixed top-0 left-0 w-full z-40">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10 w-auto"/>
                </div>

                {/* Right section with auth buttons */}
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <span className="mr-4">Bonjour, {user.name}</span>
                            <button
                                className="px-4 py-2 bg-white text-black hover:bg-red-700 rounded-lg transition-colors"
                                onClick={logout}
                            >
                                Déconnexion
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="px-4 py-2 bg-white text-black hover:bg-blue-400 rounded-lg transition-colors"
                                onClick={handleLoginClick}
                            >
                                Connexion
                            </button>
                            <button
                                className="px-4 py-2 bg-white text-black hover:bg-green-700 rounded-lg transition-colors"
                                onClick={handleRegisterClick}
                            >
                                Inscription
                            </button>
                        </>
                    )}
                </div>
            </header>

            {/* Formulaires modaux */}
            {showLogin && (
                <LoginForm onClose={handleClose} />
            )}

            {showRegister && (
                <RegisterForm onClose={handleClose} />
            )}
        </>
    );
};

export default Navbar;