import axiosInstance from '../../axiosConfig';

export const getActivationCodeByPurchaseId = async (activationCodeId) => {
    try {
        const response = await axiosInstance.get(`/activation_codes/${activationCodeId}`);
        return response.data;
    } catch (error: any) {
        console.error('Erreur lors de la récupération des détails de la commande :', error);
        throw new Error('Erreur lors de la récupération des détails de la commande : ' + error);
    }
}