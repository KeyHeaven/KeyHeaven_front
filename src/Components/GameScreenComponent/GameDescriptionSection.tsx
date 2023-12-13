import React from "react";
import { View, Text } from "react-native";
import gameStyles from "../../../Styles/GameStyles";

const GameDescriptionSection = () => (
  <View style={gameStyles.descriptionContainer}>
    <Text style={gameStyles.textTitle}> À Propos du jeu</Text>
    <Text style={gameStyles.text}>Développeur : {"Larian Studios"}</Text>
    <Text style={gameStyles.text}>Éditeur : {"Larian Studios"}</Text>
    <Text style={gameStyles.text}>Date de Sortie : {"3 août 2023"}</Text>
    <Text style={gameStyles.text}>
      Genre : {"Jeux solo, Aventure, RPG, Stratégie"}
    </Text>
  </View>
);

export default GameDescriptionSection;
