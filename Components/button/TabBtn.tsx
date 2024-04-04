import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import ButtonStyles from "./ButtonStyles";

interface TabButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ title, onPress, disabled }) => (
  <View style={{ margin: 5 }}>
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        ButtonStyles.TabBtn,
        { borderBottomWidth: disabled ? 1 : 0, borderBottomColor: "#fff" },
      ]}>
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  </View>
);

export default TabButton;
