import React from "react";
import { View, Text, Button } from "react-native";
import commonStyles from "../Styles/Styles";
import { HomeScreenProps } from "../Navigations/NavigationType";
import ButtonStyles from "../src/Components/button/ButtonStyles";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => (
  <View style={commonStyles.containerHome}>
    <Text>Accueil</Text>
    <View style={ButtonStyles.buttonContainer}>
      <Button
        title="Aller à l'écran suivant"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  </View>
);

export default HomeScreen;
