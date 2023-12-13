import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import BestSellsStyles from "./TabGalleryStyles";

interface BestSellsGalleryProps {
  data: { title: string; image: any }[];
  onPress: (title: string) => void;
}

const handleCardPress = (title: string) => {
  console.log(`Card pressed: ${title}`);
};

const BestSellsGallery: React.FC<BestSellsGalleryProps> = ({ data }) => {
  return (
    <View style={BestSellsStyles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={BestSellsStyles.card}
          onPress={() => handleCardPress(item.title)}>
          <Image
            source={item.image}
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
