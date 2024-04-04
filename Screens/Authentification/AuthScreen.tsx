import React from "react";
import { View, Text, Image } from "react-native";
import commonStyles from "../../Styles/Styles";
import { AuthScreenProps } from "../../Navigations/NavigationType";
import TextStyle from "../../Styles/TextStyle";
import CustomButton from "../../Components/button/CustomBtnComponent";

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => (
  <View style={commonStyles.containerHome}>
    <View>
      <View>
        <Image
          source={require("../../assets/images/keylogo.png")}
          style={{ height: 140, width: 135.2, margin: 60, bottom: 50 }}
        />
      </View>
      <Text style={TextStyle.title}>Bienvenue sur Keyheaven</Text>
    </View>
    <View style={{ top: 120 }}>
      <CustomButton
        onPress={() => navigation.navigate("Login")}
        buttonText="Se connecter"
      />
      <CustomButton
        onPress={() => navigation.navigate("SignUp")}
        buttonText="S'inscrire"
      />
    </View>
  </View>
);

export default AuthScreen;
