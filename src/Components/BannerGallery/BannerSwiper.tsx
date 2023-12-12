// BannerSwiper.tsx
import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";

const slides = [
  {
    title: "Cyberpunk 2077",
    image: require("../../../assets/images/cyber.png"),
  },
  {
    title: "Baldur's gate III",
    image: require("../../../assets/images/baldur.jpg"),
  },
  {
    title: "Tales of Symphonia",
    image: require("../../../assets/images/tales.jpg"),
  },
];

const BannerSwiper: React.FC = () => (
  <View style={BannerStyles.container}>
    <Swiper showsPagination={false}>
      {slides.map((slide, index) => (
        <TouchableOpacity
          key={index}
          style={BannerStyles.slide}
          onPress={() => handleSlidePress(slide.title)}
        >
          <Image
            source={slide.image}
            style={BannerStyles.image}
            resizeMode="cover"
          />
          <Text style={BannerStyles.text}>{slide.title}</Text>
        </TouchableOpacity>
      ))}
    </Swiper>
    <Text style={BannerStyles.text}>Voir les bons plans de la semaine</Text>
  </View>
);

const handleSlidePress = (title: string) => {
  console.log(`Slide pressed: ${title}`);
};

const BannerStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: 340,
    height: 100,
    borderRadius: 6,
    overflow: "hidden",
    alignSelf: "center",
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

export default BannerSwiper;
