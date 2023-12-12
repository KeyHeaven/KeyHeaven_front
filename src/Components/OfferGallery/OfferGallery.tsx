import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import OfferSlides from "../../../Data/OfferSlides";


const OfferSwiper: React.FC = () => (
  <View style={BannerStyles.container}>
    <Swiper showsPagination={false}>
      {OfferSlides.map((slide, index) => (
        <TouchableOpacity
          key={index}
          style={BannerStyles.slide}
          onPress={() => handleSlidePress(slide.title)}>
          <Image
            source={slide.image}
            style={BannerStyles.image}
            resizeMode="cover"
          />
          <Text style={BannerStyles.text}>{slide.title}</Text>
          <Text style={BannerStyles.textYear}>{slide.year}</Text>
          <Text style={BannerStyles.textGenre}>{slide.genre}</Text>
        </TouchableOpacity>
      ))}
    </Swiper>
  </View>
);

const handleSlidePress = (title: string) => {
  console.log(`Slide pressed: ${title}`);
};

const BannerStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width: 340,
    height: 300,
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
  textYear: {
    position: "absolute",
    bottom: 10,
    right: 10,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  textGenre: {
    position: "absolute",
    bottom: 10,
    right: 100,
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default OfferSwiper;
