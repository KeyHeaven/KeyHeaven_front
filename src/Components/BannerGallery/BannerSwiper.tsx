import React, { useEffect, useRef, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import BannerStyles from "./BannerSwiperStyle";
import { useNavigation } from "@react-navigation/native";
import Product from "../../Interfaces/Product";

interface BannerSwiperProps {
  data: Product[];
  onPress: (item: Product) => void;
}

const BannerSwiper: React.FC<BannerSwiperProps> = ({ data, onPress }) => {
  const navigation = useNavigation();
  const swiperRef = useRef<Swiper>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // fonction permettant de faire défiler les slides automatiquement
  useEffect(() => {
    const autoSwipe = setInterval(() => {
      if (swiperRef.current) {
        const nextIndex = (currentIndex + 1) % data.length;
        swiperRef.current.scrollBy(1);
        setCurrentIndex(nextIndex);
      }
    }, 5000);

    return () => {
      clearInterval(autoSwipe);
    };
  }, [currentIndex]);

  const handleSlidePress = (item: Product) => {
    onPress(item);
    console.log("Card pressed:", item);
    // @ts-ignore
    navigation.navigate("Game", { item });
  };

  return (
    <View style={BannerStyles.container}>
      <Swiper
        ref={swiperRef}
        showsPagination={false}
        loop={true}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {data.map((slide, index) => (
          <TouchableOpacity
            key={index}
            style={BannerStyles.slide}
            onPress={() => handleSlidePress(slide)}
          >
            <Image
              source={{ uri: slide.image }}
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
};

export default BannerSwiper;
