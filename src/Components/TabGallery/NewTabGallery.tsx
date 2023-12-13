import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import NewTabGalleryStyles from "./NewTabGalleryStyles";

interface NewTabGalleryProps {
  data: { title: string; image: any }[];
  onPress: (title: string) => void;
}

const handleCardPress = (title: string) => {
  console.log(`Card pressed: ${title}`);
};

const NewTabGallery: React.FC<NewTabGalleryProps> = ({ data }) => {
  return (
    <View style={NewTabGalleryStyles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={NewTabGalleryStyles.card}
          onPress={() => handleCardPress(item.title)}>
          <Image
            source={item.image}
            style={NewTabGalleryStyles.image}
            resizeMode="cover"
          />
          <Text style={NewTabGalleryStyles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NewTabGallery;
