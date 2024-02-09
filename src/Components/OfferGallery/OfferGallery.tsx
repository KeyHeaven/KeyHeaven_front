import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import OfferSlides from "../../../Data/OfferSlides";
import BannerStyles from "./OfferGalleryStyles";
import { useNavigation } from "@react-navigation/native";
import Product from "../../Interfaces/Product";

interface OfferSwiperProps {
  data: Product[];
  onPress: (item: Product) => void;
}

const OfferSwiper: React.FC<OfferSwiperProps> = ({ data, onPress }) => {
  const navigation = useNavigation();

  const handleSlidePress = (item: Product) => {
    onPress(item);
    // @ts-ignore
    navigation.navigate("Game", { item });
  };

  return (
    <View style={BannerStyles.container}>
      <Swiper showsPagination={false}>
        {OfferSlides.map((slide, index) => (
          <TouchableOpacity
            key={index}
            style={BannerStyles.slide}
            onPress={() => handleSlidePress(slide)}>
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
};

export default OfferSwiper;
