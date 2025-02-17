export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const formatError = (error) => {
    if (typeof error === 'string') return error;
    if (error?.message) return error.message;
    return 'Une erreur est survenue';
};