import axiosInstance from '../../axiosConfig';

export const login = async (email: string, password: string) => {
    const data = {
        email,
        password,
    }
    console.log(data);
    try {
        const response = await axiosInstance.post('/login', {
            email: email,
            password: password,
        }, {
            headers: {
                'Content-Type': 'application/ld+json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la connexion :', error.message);
        throw error;
    }
}

export const register = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post('/register', {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error('Erreur lors de l\'inscription :', error);
        throw error;
    }
}