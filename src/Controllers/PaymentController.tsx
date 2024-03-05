import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {jwtDecode} from 'jwt-decode';
import axiosInstance from '../../axiosConfig';
import { getUserById } from "./userController";

export const createPaymentIntent = async (items: any) => {
    let stripeId = "";
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
        const decodedToken: any = jwtDecode(token);
        const user = await getUserById(decodedToken.id);
        stripeId = user.stripeId;

        if (!stripeId) {
            try {
                const customerResponse = await createStripeCustomer(user.email);
                console.log('CustomerResponse:', customerResponse);
                stripeId = customerResponse.stripeId;
            } catch (error: any) {
                throw new Error('Erreur lors de la création du client Stripe :', error.code);
            }
        }
    }

    const data = {
        customerId: stripeId,
        items: items,
    };
    console.log('Data:', data);
    try {
        const response = await axiosInstance.post(`/create-payment-intent`, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error('Erreur lors de la création du paiement', error.code);
    }
}
export const paymentSuccess = async (paimentIntentId: string, purchaseId: number) => {
    console.log('PaymentSuccess:', paimentIntentId, purchaseId);
    try {
        const response = await axiosInstance.post(`/payment-success`, {
            paymentIntentId: paimentIntentId,
            purchaseId: purchaseId
        }, {
            headers: {
                'Content-Type': 'application/ld+json'
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error('Erreur lors de la mise à jour de la commande :', error.code);
    }
}

export const createStripeCustomer = async (email: string) => {
    try {
        const response = await axiosInstance.post(`/create-stripe-customer`, {
            email: email
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error('Erreur lors de la création du client Stripe :', error.code);
    }
}