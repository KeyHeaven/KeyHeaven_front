import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import NewTabGalleryStyles from "./NewTabGalleryStyles";
import { useNavigation } from "@react-navigation/native";

interface NewTabGalleryProps {
  data: {
    title: string;
    image: any;
    prix: string;
    editor: string;
    developer: string;
    date: string;
    genre: string;
  }[];
  onPress: (item: {
    title: string;
    image: any;
    prix: string;
    editor: string;
    developer: string;
    date: string;
    genre: string;
  }) => void;
}

const NewTabGallery: React.FC<NewTabGalleryProps> = ({ data, onPress }) => {
  const navigation = useNavigation();

  const handleCardPress = (item: {
    title: string;
    image: any;
    prix: string;
    editor: string;
    developer: string;
    date: string;
    genre: string;
  }) => {
    onPress(item);
    // @ts-ignore
    navigation.navigate("Game", { item });
  };

  return (
    <View style={NewTabGalleryStyles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={NewTabGalleryStyles.card}
          onPress={() => handleCardPress(item)}>
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
