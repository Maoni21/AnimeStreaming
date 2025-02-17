export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export const validatePassword = (password) => {
    return {
        isValid: password.length >= 8,
        message: password.length >= 8 ? '' : 'Le mot de passe doit contenir au moins 8 caractères'
    };
};