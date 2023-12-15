import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import NewTabGalleryStyles from "./NewTabGalleryStyles";
import { useNavigation } from "@react-navigation/native";
import Product from "../../Interfaces/Product";

interface NewTabGalleryProps {
  data: Product[];
  onPress: (item: Product) => void;
}

const NewTabGallery: React.FC<NewTabGalleryProps> = ({ data, onPress }) => {
  const navigation = useNavigation();

  const handleCardPress = (item: Product) => {
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
