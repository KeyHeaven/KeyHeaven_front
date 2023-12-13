import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import OfferSlides from "../../../Data/OfferSlides";
import BannerStyles from "./OfferGalleryStyles";

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
          <Text style={BannerStyles.textTitle}>{slide.title}</Text>
          <Text style={BannerStyles.textYear}>{slide.year}</Text>
          <Text style={BannerStyles.textGenre}>{slide.genre}</Text>
          <Text style={BannerStyles.text}>{slide.promo}</Text>
        </TouchableOpacity>
      ))}
    </Swiper>
  </View>
);

const handleSlidePress = (title: string) => {
  console.log(`Slide pressed: ${title}`);
};

export default OfferSwiper;
