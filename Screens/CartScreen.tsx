import React, {useState} from "react";
import {View, Text, ScrollView, StyleSheet} from "react-native";
import {CartScreenProps} from "../Navigations/NavigationType";
import CustomButton from "../src/Components/button/CustomBtnComponent";
import CartItem from "../src/Components/cart/CartItem";
import PaymentSuccessModal from "../src/Components/cart/PaymentConfirmationModal";
import commonStyles from "../Styles/Styles";
const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Counter strike 2', plateforme: "Steam", price: 10, quantity: 1, imageUrl: "https://image.api.playstation.com/cdn/EP1004/CUSA00411_00/eXsWlP0EkcVkLPHgU4pjflmg07252yU8.png" },
        { id: 2, name: 'GTA', plateforme: "Rockstar", price: 20, quantity: 1, imageUrl: "https://image.api.playstation.com/cdn/EP1004/CUSA00411_00/eXsWlP0EkcVkLPHgU4pjflmg07252yU8.png" },
        { id: 3, name: 'Fifa', plateforme: "Xbox", price: 15, quantity: 1, imageUrl: "https://image.api.playstation.com/cdn/EP1004/CUSA00411_00/eXsWlP0EkcVkLPHgU4pjflmg07252yU8.png" },
    ]);
    const handleQuantityChange = (id, delta) => {
        setCartItems(currentItems =>
            currentItems.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: Math.max(1, item.quantity + delta) };
                }
                return item;
            }),
        );
    };
    const [successModalVisible, setSuccessModalVisible] = useState(false);

    const handlePayment = () => {
        setSuccessModalVisible(true);
    };
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return (
        <View style={commonStyles.cartContainer}>
            <View style={commonStyles.cartHeader}>
                <Text style={commonStyles.cartTotal}>Votre panier:</Text>
                <Text style={commonStyles.cartTotal}>{total.toFixed(2)}€</Text>
            </View>
            <ScrollView style={commonStyles.CartItemContainer}>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} handleQuantityChange={handleQuantityChange}  />
                ))}
            </ScrollView>
            <View style={{alignItems:'center'}}>
                <CustomButton
                    onPress={() => handlePayment()}
                    buttonText="Payer"
                />
            </View>
            <PaymentSuccessModal
                visible={successModalVisible}
                onReturn={() => {
                    setSuccessModalVisible(false);
                }}
                onDetails={() => {
                    setSuccessModalVisible(false);
                }}
            />
        </View>
    );
};

export default CartScreen;
