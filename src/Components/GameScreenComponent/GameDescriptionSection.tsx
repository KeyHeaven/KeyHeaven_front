import React from "react";
import { View, Text } from "react-native";
import gameStyles from "../../../Styles/GameStyles";

interface GameDescriptionSectionProps {
  item: { developer: string; editor: string; genre: string ; date: string };
}

const GameDescriptionSection : React.FC<GameDescriptionSectionProps>= ({ item }) => (
  <View style={gameStyles.descriptionContainer}>
    <Text style={gameStyles.textTitle}> À Propos du jeu</Text>
    <Text style={gameStyles.text}>Développeur : {item.developer}</Text>
    <Text style={gameStyles.text}>Éditeur : {item.editor}</Text>
    <Text style={gameStyles.text}>Date de Sortie : {item.date}</Text>
    <Text style={gameStyles.text}>
      Genre : {item.genre}
    </Text>
  </View>
);

export default GameDescriptionSection;
