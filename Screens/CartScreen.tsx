import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CartScreenProps } from "../Navigations/NavigationType";
import CustomButton from "../src/Components/button/CustomBtnComponent";
import CartItem from "../src/Components/cart/CartItem";
import PaymentSuccessModal from "../src/Components/cart/PaymentConfirmationModal";
import commonStyles from "../Styles/Styles";
import TopBar from "../src/Components/TopBar/TopBar";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { cartItems as initialCartItems } from "../Data/CartData";

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const handleQuantityChange = (id, delta) => {
    setCartItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      })
    );
  };
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handlePayment = () => {
    setSuccessModalVisible(true);
  };
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <View style={commonStyles.containerHomePage}>
      <TopBar />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesomeIcon
          style={{
            height: 40,
            width: 40,
            marginTop: 50,
            marginLeft: 10,
            color: "#272727",
            backgroundColor: "#fff",
            padding: 15,
            borderRadius: 50,
          }}
          icon={faArrowLeft}
        />
      </TouchableOpacity>
      <View style={commonStyles.cartContainer}>
        <View style={commonStyles.cartHeader}>
          <Text style={commonStyles.cartTotal}>Votre panier:</Text>
          <Text style={commonStyles.cartTotal}>{total.toFixed(2)}€</Text>
        </View>
        <ScrollView>
          {cartItems.map((item) => (
            <View style={styles.cartItemBox} key={item.id}>
              <CartItem
                key={item.id}
                item={item}
                handleQuantityChange={handleQuantityChange}
              />
            </View>
          ))}
        </ScrollView>
        <View style={{ alignItems: "center" }}>
          <CustomButton onPress={() => handlePayment()} buttonText="Payer" />
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
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemBox: {
    borderWidth: 1,
    backgroundColor: "#323232",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  // ... (autres styles)
});

export default CartScreen;
