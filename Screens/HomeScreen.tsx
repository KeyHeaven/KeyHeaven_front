import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import commonStyles from "../Styles/Styles";
import { HomeScreenProps } from "../Navigations/NavigationType";
import TopBar from "../src/Components/TopBar/TopBar";
import BannerSwiper from "../src/Components/BannerGallery/BannerSwiper";
import TabButton from "../src/Components/button/TabBtn";
import TabContent from "../src/Components/TabContent/TabContent";
import OfferSwiper from "../src/Components/OfferGallery/OfferGallery";
import slides from "../Data/Slides";
import OfferSlides from "../Data/OfferSlides";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Tab1");
  const handleCardPress = (item: {
    title: string;
    image: any;
    prix: string;
    editor: string;
    developer: string;
    date: string;
    genre: string;
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    directX: string;
    additionalNote: string;
    screen: string;
    promo: string;
    year: string;
  }) => {
    console.log("Card pressed:", item);
  };

  return (
    <ScrollView style={commonStyles.containerHomePage}>
      <TopBar />
      <BannerSwiper data={slides} onPress={handleCardPress} />
      <View style={commonStyles.row}>
        <TabButton
          title="Nouveautés"
          onPress={() => setActiveTab("Tab1")}
          disabled={activeTab === "Tab1"}
        />
        <TabButton
          title="Meilleures ventes"
          onPress={() => setActiveTab("Tab2")}
          disabled={activeTab === "Tab2"}
        />
        <TabButton
          title="Promos"
          onPress={() => setActiveTab("Tab3")}
          disabled={activeTab === "Tab3"}
        />
      </View>
      <TabContent activeTab={activeTab} />
      <OfferSwiper data={OfferSlides} onPress={handleCardPress} />
    </ScrollView>
  );
};

export default HomeScreen;
