import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import SalesGallerySstyles from "./SalesGalleryStyles";
import { useNavigation } from "@react-navigation/native";

interface SalesGalleryProps {
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
    promo: string;
    year: string;
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
    promo: string;
    year: string;
  }) => void;
}

const SalesGallery: React.FC<SalesGalleryProps> = ({ data, onPress }) => {
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
    promo: string;
    year: string;
  }) => {
    onPress(item);
    // @ts-ignore
    navigation.navigate("Game", { item });
  };

  return (
    <View style={SalesGallerySstyles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={SalesGallerySstyles.card}
          onPress={() => handleCardPress(item)}>
          <Image
            source={item.image}
            style={SalesGallerySstyles.image}
            resizeMode="cover"
          />
          <Text style={SalesGallerySstyles.text}>{item.title}</Text>
          <Text style={SalesGallerySstyles.textSales}>{item.promo}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SalesGallery;
