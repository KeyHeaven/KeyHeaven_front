import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';
import { CardField, confirmPayment } from '@stripe/stripe-react-native';
import commonStyles from '../../Styles/Styles';
import TopBar from '../../Components/TopBar/TopBar';
import PaymentSuccessModal from '../../Components/cart/PaymentConfirmationModal';
import { createPaymentIntent, paymentSuccess } from '../../Controllers/PaymentController';
import { useCart } from '../../Controllers/CartController';
import CustomButton from '../../Components/button/CustomBtnComponent';

const PaymentScreen = ({ route, navigation }) => {
    const { purchasingId } = route.params;
    const [cartItems, setCartItems] = useState([]);
    const { getCartItems, clearCart } = useCart();
    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = async () => {
        try {
            const storedCartItems = await getCartItems();
            if (storedCartItems !== null) {
                setCartItems(storedCartItems);
            }
        } catch (error) {
            console.error('Erreur lors du chargement des produits depuis le stockage', error);
        }
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const [successModalVisible, setSuccessModalVisible] = useState(false);
    const [cardDetails, setCardDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handlePayment = async () => {
        if (!cardDetails?.complete) {
            Alert.alert('Erreur', 'Veuillez renseigner les informations de votre carte bancaire.');
            return;
        }

        setIsLoading(true);

        const products = cartItems.map(item => ({
            id: item.id,
        }));
        const response = await createPaymentIntent(products);
        const { clientSecret, error: backendError } = await response;

        if (backendError) {
            Alert.alert('Paiement refusé', backendError);
            setIsLoading(false);
            return;
        }

        const { error, paymentIntent } = await confirmPayment(clientSecret, {
            paymentMethodData: cardDetails,
            paymentMethodType: "Card",
        });

        if (error) {
            Alert.alert('Paiement refusé', error.message);
            setIsLoading(false);
        } else if (paymentIntent) {
            setIsLoading(false);
            await paymentSuccess(paymentIntent.id, purchasingId);
            clearCart();
            setSuccessModalVisible(true);
        }
    };

    return (
        <View style={commonStyles.containerHomePage}>
            <TopBar showBackButton={true} />
            <Text style={styles.header}>Récapitulatif de la Commande</Text>
            <ScrollView>
                {cartItems.map((item) => (
                    <View key={item.id} style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.title}</Text>
                        <Text style={styles.itemPrice}>{item.quantity} x <Text style={styles.itemPriceValue}>{item.price}€</Text></Text>
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.total}>Total : <Text style={styles.total}>{total.toFixed(2)}€</Text></Text>
            <CardField
                postalCodeEnabled={false}
                onCardChange={(card) => setCardDetails(card)}
                style={styles.cardContainer}
            />
            {isLoading ? (
                <ActivityIndicator size="large" color="#FFFFFF" />
            ) : (
                <View style={{ alignItems: "center" }}>
                    <CustomButton onPress={() => handlePayment()} buttonText="Valider" />
                </View>
            )}
            <PaymentSuccessModal
                visible={successModalVisible}
                onReturn={() => {
                    setSuccessModalVisible(false);
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }}
                onDetails={() => {
                    setSuccessModalVisible(false);
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'PurchaseDetailsScreen', params: { purchaseId: purchasingId } }],
                    });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        color: '#FFFFFF',
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemName: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    itemPrice: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    itemPriceValue: {
        color: '#FFFFFF',
    },
    total: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
        marginVertical: 20,
    },
    cardContainer: {
        height: 50,
        marginVertical: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
});


export default PaymentScreen;
