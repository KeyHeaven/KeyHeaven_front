import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../axiosConfig';
import { jwtDecode } from 'jwt-decode';
export const addPurchase = async (products: any) => {
    try {
        const user = await AsyncStorage.getItem('userToken');
        const token = jwtDecode(user);
        const response = await axiosInstance.post(`/purchasings`, {
            totalAmount: 1500,
            status: 'WAITING_PAYMENT',
            user: `/api/users/${token.id}`,
            purchaseDate: new Date().toISOString()

        }, {
            headers: {
                'Content-Type': 'application/ld+json'
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error('Erreur lors de l\'ajout de la commande :', error.code);
    }
}


export const addPurchaseDetails = async (purchaseId: string, products: any) => {
    try {
        const responses = await Promise.all(products.map(async (product) => {
            return axiosInstance.post(`/purchase_details`, {
                quantity: 1,
                unitPrice: 1,
                purchase: `api/purchasings/${purchaseId}`,
                game: `api/games/${product.id}`,
            }, {
                headers: {
                    'Content-Type': 'application/ld+json'
                }
            });
        }));

        return responses.map(response => response.data);
    } catch (error: any) {
        console.error('Erreur lors de l\'ajout des détails de la commande :', error);
        throw new Error('Erreur lors de l\'ajout des détails de la commande : ' + error);
    }
}

export const getPurchaseById = async (purchaseId: string) => {
    try {
        const response = await axiosInstance.get(`/purchasings/${purchaseId}`);
        return response.data;
    } catch (error: any) {
        console.error('Erreur lors de la récupération des détails de la commande :', error);
        throw new Error('Erreur lors de la récupération des détails de la commande : ' + error);
    }
}

export const getAllPurchaseByUser = async (userId: string) => {
    try {
        const response = await axiosInstance.get(`/purchasings?user=${userId}`);
        return response.data;
    } catch (error: any) {
        console.error('Erreur lors de la récupération des commandes :', error);
        throw new Error('Erreur lors de la récupération des commandes : ' + error);
    }
}

export const getPurschaseDetails = async (purchaseId: string) => {
    try {
        const response = await axiosInstance.get(`/purchase_details/${purchaseId}`);
        return response.data;
    } catch (error: any) {
        console.error('Erreur lors de la récupération des détails de la commande :', error);
        throw new Error('Erreur lors de la récupération des détails de la commande : ' + error);
    }
}

export const getPurchaseDetailsByPurchaseId = async (purchaseId: string) => {
    try {
        const response = await axiosInstance.get(`/purchase_details`, {
            params: {
                purchase: `/api/purchasings/${purchaseId}`
            }
        });
        return response.data;
    } catch (error: any) {
        console.error('Erreur lors de la récupération des détails de la commande :', error);
        throw new Error('Erreur lors de la récupération des détails de la commande : ' + error);
    }
}
