import React from "react";
import { View, Text, Button } from "react-native";
import commonStyles from "../Styles/Styles";
import { DetailsScreenProps } from "../Navigations/NavigationType";
import ButtonStyles from "../Components/button/ButtonStyles";

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => (
  <View style={commonStyles.container}>
    <Text>Écran détails</Text>
    <View style={ButtonStyles.buttonContainer}>
      <Button
        title="Retour à l'écran Précédent"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  </View>
);

export default DetailsScreen;
