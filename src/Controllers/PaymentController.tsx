import axios from "axios";

export const createPaymentIntent = async (items: any) => {
    try {
        const response = await axios.post(`${process.env.EXPO_PUBLIC_API_PAYMENT_URL}/create-payment-intent`, {
            customerId: 'cus_PAran2pH3B5egS',
            items: items,
        }, {
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
    try {
        const response = await axios.post(`${process.env.EXPO_PUBLIC_API_PAYMENT_URL}/payment-success`, {
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