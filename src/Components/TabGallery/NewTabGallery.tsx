import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

interface NewTabGalleryProps {
  data: { title: string; image: any }[];
  onPress: (title: string) => void;
}

const handleCardPress = (title: string) => {
  console.log(`Card pressed: ${title}`);
};

const NewTabGallery: React.FC<NewTabGalleryProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => handleCardPress(item.title)}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  card: {
    width: "48%",
    height: 150,
    borderRadius: 6,
    overflow: "hidden",
    marginVertical: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    bottom: 10,
    left: 10,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default NewTabGallery;
