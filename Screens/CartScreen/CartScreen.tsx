import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { CartScreenProps } from "../../Navigations/NavigationType";
import CustomButton from "../../src/Components/button/CustomBtnComponent";
import CartItem from "../../src/Components/cart/CartItem";
import commonStyles from "../../Styles/Styles";
import TopBar from "../../src/Components/TopBar/TopBar";
import { useCart } from "../../src/Controllers/CartController";
import { addPurchase, addPurchaseDetails } from "../../src/Controllers/PurchaseController";
const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
    const [items, setItems] = useState([]);
    const { getCartItems, removeFromCart } = useCart();

    const handleQuantityChange = (id, delta) => {
        setItems((currentItems) =>
            currentItems.map((item) => {
                if (item.id === id) {
                    const newQuantity = item.quantity + delta;
                    if (newQuantity <= 0) {
                        removeFromCart(item);
                        return null;
                    } else {
                        return { ...item, quantity: newQuantity };
                    }
                }
                return item;
            }).filter(Boolean)
        );
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
