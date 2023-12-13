import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import SalesGallerySstyles from "./SalesGalleryStyles";

interface SalesGalleryProps {
  data: { title: string; image: any; sales: string }[];
  onPress: (title: string) => void;
}

const handleCardPress = (title: string) => {
  console.log(`Card pressed: ${title}`);
};

const SalesGallery: React.FC<SalesGalleryProps> = ({ data }) => {
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
