import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import SalesGallerySstyles from "./SalesGalleryStyles";
import { useNavigation } from "@react-navigation/native";
import Product from "../../Interfaces/Product";

interface SalesGalleryProps {
  data: Product[];
  onPress: (item: Product) => void;
}

const SalesGallery: React.FC<SalesGalleryProps> = ({ data, onPress }) => {
  const navigation = useNavigation();

  const handleCardPress = (item: Product) => {
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
