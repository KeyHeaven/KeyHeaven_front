import React from "react";
import { View, Text, Button, Image, Pressable, TextInput } from "react-native";
import commonStyles from "../../Styles/Styles";
import { SignUpScreenProps } from "../../Navigations/NavigationType";
import TextStyle from "../../Styles/TextStyle";
import CustomButton from "../../src/Components/button/CustomBtnComponent";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomInputAuth from "../../src/Components/input/CustomInputAuth";

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => (
  <View style={commonStyles.containerHome}>
    <View>
      <View style={{ marginTop: 50 }}>
        <Image
          source={require("../../assets/images/keylogo.png")}
          style={{ height: 140, width: 135.2, margin: 50 }}
        />
      </View>
    </View>
    <View>
      <Text style={TextStyle.title}>Keyheaven</Text>
    </View>
    <View style={{ marginTop: 100 }}>
      <CustomInputAuth icon={faUser} placeholder="Pseudo" />
      <CustomInputAuth icon={faUser} placeholder="Adresse E-mail" />
      <CustomInputAuth icon={faLock} placeholder="Mot de passe" />
      <CustomInputAuth icon={faLock} placeholder="Confirmation Mot de passe" />
    </View>
    <View style={{ marginBottom: 20, top: 10 }}>
      <CustomButton
        onPress={() => navigation.navigate("Home")}
        buttonText="S'inscrire"
      />
    </View>
  </View>
);

export default SignUpScreen;