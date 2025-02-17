const API_URL = process.env.REACT_APP_API_URL || 'http://host.docker.internal:5000/api';

export const authService = {
    register: async (userData) => {
        try {
            console.log('API URL:', API_URL);

            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Détails de l\'erreur:', errorText);
                throw new Error(errorText || 'Erreur d\'inscription');
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur complète:', error);
            throw error;
        }
    }
};