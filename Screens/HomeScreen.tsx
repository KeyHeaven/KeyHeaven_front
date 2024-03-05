import React, {useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import commonStyles from "../Styles/Styles";
import { HomeScreenProps } from "../Navigations/NavigationType";
import TopBar from "../src/Components/TopBar/TopBar";
import BannerSwiper from "../src/Components/BannerGallery/BannerSwiper";
import TabButton from "../src/Components/button/TabBtn";
import TabContent from "../src/Components/TabContent/TabContent";
import OfferSwiper from "../src/Components/OfferGallery/OfferGallery";
import OfferSlides from "../Data/OfferSlides";
import handleCardPress from "../logic/handleCardPress";
import {getGames} from "../src/Controllers/GameController";
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Tab1");
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetchSlides();
  });
  const fetchSlides = async () => {
    const data = await getGames();
    setSlides(data['hydra:member']);
  }
  return (
    <ScrollView style={commonStyles.containerHomePage}>
      <TopBar />
      <BannerSwiper data={slides} onPress={handleCardPress}/>
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
