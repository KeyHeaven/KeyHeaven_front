import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import commonStyles from "../Styles/Styles";
import { HomeScreenProps } from "../Navigations/NavigationType";
import TopBar from "../Components/TopBar/TopBar";
import BannerSwiper from "../Components/BannerGallery/BannerSwiper";
import TabButton from "../Components/button/TabBtn";
import TabContent from "../Components/TabContent/TabContent";
import OfferSwiper from "../Components/OfferGallery/OfferGallery";
import { getGames } from "../Controllers/GameController";
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
      <BannerSwiper data={slides} />
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
      <OfferSwiper data={slides} />
    </ScrollView>
  );
};

export default HomeScreen;
