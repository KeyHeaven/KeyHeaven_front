import React, { FC } from "react";
import { View, TextInput, StyleSheet, TextStyle } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import InputStyles from "./InputStyles";

interface CustomInputAuthProps {
  icon: IconDefinition;
  placeholder: string;
}

const CustomInputAuth: FC<CustomInputAuthProps> = ({ icon, placeholder }) => (
  <View style={InputStyles.inputSection}>
    <FontAwesomeIcon
      style={{ height: 25, width: 25, marginLeft: 20, color: "#838383" }}
      icon={icon}
    />
    <TextInput
      style={InputStyles.inputAuth}
      placeholder={placeholder}
      underlineColorAndroid="transparent"
    />
  </View>
);

export default CustomInputAuth;
