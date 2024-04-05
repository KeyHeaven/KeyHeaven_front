import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { CartScreenProps } from "../../Navigations/NavigationType";
import CustomButton from "../../Components/button/CustomBtnComponent";
import CartItem from "../../Components/cart/CartItem";
import commonStyles from "../../Styles/Styles";
import TopBar from "../../Components/TopBar/TopBar";
import { useCart } from "../../Controllers/CartController";
import { addPurchase, addPurchaseDetails } from "../../Controllers/PurchaseController";
const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
    const [items, setItems] = useState([]);
    const { getCartItems, removeFromCart, addToCart } = useCart();

    const handleQuantityChange = (id, delta) => {
        items.map((item) => {
            if (item.id === id) {
                const newQuantity = item.quantity + delta;
                if (newQuantity < item.quantity) {
                    removeFromCart({ ...item, quantity: newQuantity });
                    loadItemsFromStorage();
                } else {
                    addToCart({ ...item, quantity: newQuantity });
                    loadItemsFromStorage();
                }
            }
            return item;
        }).filter(Boolean);

    };

    useEffect(() => {
        loadItemsFromStorage();
    }, []);

    const loadItemsFromStorage = async () => {
        const cartItems = await getCartItems();
        setItems(cartItems);
    };
    const total = items.reduce((sum, item) => sum + item.price * (item.quantity ?? 0), 0);

    const handlePayment = async () => {
        const purchase = await addPurchase(items);

        const purchaseDetails = await addPurchaseDetails(purchase.id, items);
        navigation.navigate("Payment", { purchasingId: purchase.id });
    };


    return (
        <View style={commonStyles.containerHomePage}>
            <TopBar showBackButton={true} />

            <View style={commonStyles.cartContainer}>
                <View style={commonStyles.cartHeader}>
                    <Text style={commonStyles.cartTotal}>Votre panier:</Text>
                    <Text style={commonStyles.cartTotal}>{total.toFixed(2)}€</Text>
                </View>
                <ScrollView>
                    {items.map((item) => (
                        <View style={commonStyles.cartItemBox} key={item.id}>
                            <CartItem key={item.id} item={item} handleQuantityChange={handleQuantityChange} />
                        </View>
                    ))}
                </ScrollView>
                {items.length > 0 && (
                    <View style={{ alignItems: "center" }}>
                        <CustomButton onPress={() => handlePayment()} buttonText="Payer" />
                    </View>
                )}
            </View>
        </View>
    );
};

export default CartScreen;
