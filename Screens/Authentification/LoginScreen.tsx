import React from "react";
import { View, Text, Button, Image, Pressable } from "react-native";
import commonStyles from "../../Styles/Styles";
import { LoginScreenProps } from "../../Navigations/NavigationType";
import TextStyle from "../../Styles/TextStyle";
import CustomButton from "../../Components/CustomBtnComponent";

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => (
  <View style={commonStyles.containerHome}>
    <View>
      <View style={{ flex: 1, justifyContent: "flex-start", marginTop: 50 }}>
        <Image
          source={require("../../assets/images/keylogo.png")}
          style={{ height: 140, width: 135.2, margin: 50 }}
        />
      </View>
    </View>
    <View>
      <Text style={TextStyle.title}>Keyheaven</Text>
    </View>
    <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
      <CustomButton
        onPress={() => navigation.navigate("Home")}
        buttonText="Se connecter"
      />
    </View>
  </View>
);

export default LoginScreen;
