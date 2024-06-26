import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import BestSellsStyles from "./TabGalleryStyles";
import { useNavigation } from "@react-navigation/native";
import Product from "../../Interfaces/Product";

interface BestSellsGalleryProps {
  data: Product[];
}

const BestSellsGallery: React.FC<BestSellsGalleryProps> = ({
  data,
}) => {
  const navigation = useNavigation();
  const handleCardPress = (item: Product) => {
    // @ts-ignore
    navigation.navigate("Game", { item });
  };
  return (
    <View style={BestSellsStyles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={BestSellsStyles.card}
          onPress={() => handleCardPress(item)}>
          <Image
            source={{ uri: item.image }}
            style={BestSellsStyles.image}
            resizeMode="cover"
          />
          <Text style={BestSellsStyles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BestSellsGallery;
