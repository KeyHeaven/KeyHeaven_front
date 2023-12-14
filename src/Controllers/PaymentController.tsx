export const createPaymentIntent = async (items) => {
    const url = `${process.env.EXPO_PUBLIC_API_URL}/create-payment-intent`;
    console.log(url);
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            priceId: 1000,
            customerId: 'cus_PAran2pH3B5egS',
            items: items
        }),
    });
}