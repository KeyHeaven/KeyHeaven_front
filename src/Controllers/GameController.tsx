import axiosInstance from '../../axiosConfig';


export const getGames = async () => {
    try {
        const response = await axiosInstance.get(`/games`);
        return response.data;
    } catch (error: any) {
        throw new Error('Erreur lors de la récupération de la liste de jeux :', error.code);
    }
}

export const getGameById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/games/${id}`);
        return response.data;
    } catch (error: any) {
        throw new Error('Erreur lors de la récupération du jeu :', error.code);
    }
}

export const searchGame = async (title: string) => {
    try {
        const response = await axiosInstance.get(`/games?title=${title}`);
        return response.data;
    } catch (error: any) {
        throw new Error('Erreur lors de la recherche de jeu :', error.code);
    }
}

export const getNewGames = async () => {
    try {
        const response = await axiosInstance.get(`/games?order[exitDate]=DESC`);
        return response.data;
    } catch (error: any) {
        throw new Error('Erreur lors de la récupération des nouveaux jeux :', error.code);
    }
}