import React from "react";
import { View, Text, Button, Image, Pressable } from "react-native";
import commonStyles from "../../Styles/Styles";
import { AuthScreenProps } from "../../Navigations/NavigationType";
import TextStyle from "../../Styles/TextStyle";
import CustomButton from "../../Components/CustomBtnComponent";

const AuthScreen: React.FC<AuthScreenProps> = ({ navigation }) => (
  <View style={commonStyles.containerHome}>
    <View>
      <View style={{ flex: 1, justifyContent: "flex-start", marginTop: 50 }}>
        <Image
          source={require("../../assets/images/keylogo.png")}
          style={{ height: 140, width: 135.2, margin: 50 }}
        />
      </View>

      <Text style={TextStyle.title}>Bienvenue sur Keyheaven</Text>
    </View>
    <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
      <CustomButton
        onPress={() => navigation.navigate("Home")}
        buttonText="Se connecter"
      />
      <CustomButton
        onPress={() => navigation.navigate("Home")}
        buttonText="S'inscrire"
      />
    </View>
  </View>
);

export default AuthScreen;
