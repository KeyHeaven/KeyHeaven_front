import React from "react";
import { View, Text, Pressable } from "react-native";
import TextStyle from "../Styles/TextStyle";
import commonStyles from "../Styles/Styles";

interface CustomButtonProps {
  onPress: () => void;
  buttonText: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, buttonText }) => (
  <View style={commonStyles.buttonContainer}>
    <Pressable
      style={{
        backgroundColor: "#2556A1",
        padding: 10,
        borderRadius: 8,
        width: 300,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}>
      <Text style={TextStyle.btnText}>{buttonText}</Text>
    </Pressable>
  </View>
);

export default CustomButton;
