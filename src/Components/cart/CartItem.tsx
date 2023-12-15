import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMinus,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import commonStyles from "../../../Styles/Styles";

interface CartItemProps {
  item: any;
  handleQuantityChange: any;
}

const CartScreen: React.FC<CartItemProps> = ({
  item,
  handleQuantityChange,
}) => {
  return (
    <View style={commonStyles.cartItem}>
      <Image source={{ uri: item.imageUrl }} style={commonStyles.cartImage} />
      <View style={{ flex: 1, marginTop: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 18, color: "#fff" }}>{item.name}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 25,
          }}>
          <Text style={{ color: "#fff" }}>{item.plateforme}</Text>
          <View style={commonStyles.quantityControls}>
            <TouchableOpacity onPress={() => handleQuantityChange(item.id, -1)}>
              <FontAwesomeIcon icon={faMinus} size={20} color="#fff" />
            </TouchableOpacity>
            <Text style={commonStyles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => handleQuantityChange(item.id, 1)}>
              <FontAwesomeIcon icon={faPlus} size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ width: 75, alignItems: "flex-end", marginTop: 10 }}>
        <Text style={{ color: "#fff" }}>
          {(item.price * item.quantity).toFixed(2)}€
        </Text>
        <TouchableOpacity
          onPress={() => {
            null;
          }}
          style={{ marginTop: 25 }}>
          <FontAwesomeIcon icon={faArrowRight} size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
