import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import BestSellsStyles from "./TabGalleryStyles";
import { useNavigation } from "@react-navigation/native";

interface BestSellsGalleryProps {
  data: {
    title: string;
    image: any;
    prix: string;
    editor: string;
    developer: string;
    date: string;
    genre: string;
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    directX: string;
    additionalNote: string;
    screen: string;
  }[];
  onPress: (item: {
    title: string;
    image: any;
    prix: string;
    editor: string;
    developer: string;
    date: string;
    genre: string;
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    directX: string;
    additionalNote: string;
    screen: string;
  }) => void;
}

const BestSellsGallery: React.FC<BestSellsGalleryProps> = ({
  data,
  onPress,
}) => {
  const navigation = useNavigation();
  const handleCardPress = (item: {
    title: string;
    image: any;
    prix: string;
    editor: string;
    developer: string;
    date: string;
    genre: string;
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    directX: string;
    additionalNote: string;
    screen: string;
  }) => {
    onPress(item);
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
