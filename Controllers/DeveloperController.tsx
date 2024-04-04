import axiosInstance from '../axiosConfig';


export const getDeveloperById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/developerss/${id.split('/')[3]}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération du développeur', error);
        return null;
    }
}