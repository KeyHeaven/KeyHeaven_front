// GameImageSection.tsx
import React from "react";
import { View, Text, Image } from "react-native";
import gameStyles from "../../../Styles/GameStyles";

interface GameImageSectionProps {
  item: { title: string; image: any; prix: string };
}

const GameImageSection: React.FC<GameImageSectionProps> = ({ item }) => (
  <View style={gameStyles.imageContainer}>
    <Image
      style={gameStyles.gameImage}
      source={item.image}
    />
    <Text style={[gameStyles.gameName, gameStyles.overlayText]}>
      {item.title}
    </Text>
    <Text style={[gameStyles.gamePrice, gameStyles.overlayText]}>
      {`€${item.prix}`}
    </Text>
  </View>
);

export default GameImageSection;
