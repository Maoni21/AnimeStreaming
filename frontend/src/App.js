import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './contexts/AuthContext'; // Assurez-vous de l'import correct
import WelcomePage from "./components/WelcomePage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <AuthProvider>
            <Navbar />
            <WelcomePage/>
        </AuthProvider>
    );
}

export default App;