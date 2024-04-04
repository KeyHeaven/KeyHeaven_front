import axiosInstance from '../axiosConfig';

export const getEditorById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/editors/${id.split('/')[3]}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'éditeur', error);
        return null;
    }
}