import React from "react";
import { View, Text, Image } from "react-native";
import gameStyles from "../../../Styles/GameStyles";
import Product from "../../Interfaces/Product";

interface GameImageSectionProps {
  item: Product;
}

const GameImageSection: React.FC<GameImageSectionProps> = ({ item }) => (
  <View style={gameStyles.imageContainer}>
    <Image
      style={gameStyles.gameImage}
      source={{ uri: item.image }}
    />
    <Text style={[gameStyles.gameName, gameStyles.overlayText]}>
      {item.title}
    </Text>
    <Text style={[gameStyles.gamePrice, gameStyles.overlayText]}>
      {`€${item.price}`}
    </Text>
  </View>
);

export default GameImageSection;
