import React, { useState } from "react";
import logo from "../asset/logo.svg";
import { LoginForm, RegisterForm } from './LoginForm';

const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <>
            <header className="bg-black text-white p-4 shadow-md flex items-center justify-between fixed top-0 left-0 w-full z-40">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-full w-auto"/>
                </div>

                {/* Right section with auth buttons */}
                <div className="flex items-center space-x-4">
                    <button
                        className="px-4 py-2 bg-white text-black hover:bg-blue-400 rounded-lg transition-colors"
                        onClick={() => setShowLogin(true)}
                    >
                        Connexion
                    </button>
                    <button
                        className="px-4 py-2 bg-white text-black hover:bg-red-700 rounded-lg transition-colors"
                        onClick={() => setShowRegister(true)}
                    >
                        Inscription
                    </button>
                </div>
            </header>

            {/* Formulaires modaux */}
            {showLogin && (
                <LoginForm onClose={() => setShowLogin(false)} />
            )}

            {showRegister && (
                <RegisterForm onClose={() => setShowRegister(false)} />
            )}
        </>
    );
};

export default Navbar;