import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import SalesGallerySstyles from "./SalesGalleryStyles";
import { useNavigation } from "@react-navigation/native";

interface SalesGalleryProps {
  data: { title: string; image: any; sales: string }[];
  onPress: (title: string) => void;
}


const SalesGallery: React.FC<SalesGalleryProps> = ({ data }) => {

  const navigation = useNavigation();

  const handleCardPress = (title: string) => {
    // @ts-ignore
    navigation.navigate("Game")
  };

  return (
    <View style={SalesGallerySstyles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={SalesGallerySstyles.card}
          onPress={() => handleCardPress(item.title)}>
          <Image
            source={item.image}
            style={SalesGallerySstyles.image}
            resizeMode="cover"
          />
          <Text style={SalesGallerySstyles.text}>{item.title}</Text>
          <Text style={SalesGallerySstyles.textSales}>{item.sales}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SalesGallery;
