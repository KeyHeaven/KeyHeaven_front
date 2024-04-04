import React from "react";
import { View, Text, Pressable } from "react-native";
import ButtonStyles from "./ButtonStyles";

interface CustomButtonProps {
  onPress: () => void;
  buttonText: string;
  styles?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, buttonText, styles  }) => (
  <View style={ButtonStyles.buttonContainer}>
    <Pressable
      style={{
        backgroundColor: "#2556A1",
        padding: 10,
        borderRadius: 8,
        width: 300,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
          ...styles,
      }}
      onPress={onPress}>
      <Text style={ButtonStyles.btnText}>{buttonText}</Text>
    </Pressable>
  </View>
);

export default CustomButton;
