import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import NewTabGalleryStyles from "./NewTabGalleryStyles";
import { useNavigation } from "@react-navigation/native";

interface NewTabGalleryProps {
  data: { title: string; image: any }[];
  onPress: (title: string) => void;
}



const NewTabGallery: React.FC<NewTabGalleryProps> = ({ data }) => {
  const navigation = useNavigation();
  const handleCardPress = (title: string) => {
    // @ts-ignore
    navigation.navigate("Game")
  };
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
