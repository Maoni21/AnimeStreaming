import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
      <div>
        <h1>Bienvenue sur notre application</h1>
        <nav>
          <Link to="/login">Connexion</Link> | <Link to="/register">Inscription</Link>
        </nav>
      </div>
  );
};

export default App;
