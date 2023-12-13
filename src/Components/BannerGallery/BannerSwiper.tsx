import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import SmallSlides from "../../../Data/SmallSlides";
import BannerStyles from "./BannerSwiperStyle";

const BannerSwiper: React.FC = () => (
  <View style={BannerStyles.container}>
    <Swiper showsPagination={false}>
      {SmallSlides.map((slide, index) => (
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
        </TouchableOpacity>
      ))}
    </Swiper>
    <Text style={BannerStyles.text}>Voir les bons plans de la semaine</Text>
  </View>
);

const handleSlidePress = (title: string) => {
  console.log(`Slide pressed: ${title}`);
};

export default BannerSwiper;
