import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import commonStyles from "../Styles/Styles";
import { HomeScreenProps } from "../Navigations/NavigationType";
import ButtonStyles from "../src/Components/button/ButtonStyles";
import TopBar from "../src/Components/TopBar/TopBar";
import BannerSwiper from "../src/Components/BannerGallery/BannerSwiper";
import CustomButton from "../src/Components/button/CustomBtnComponent";
import TabButton from "../src/Components/button/TabBtn";
import TabContent from "../src/Components/TabContent/TabContent";
import OfferSwiper from "../src/Components/OfferGallery/OfferGallery";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Tab1");

  return (
    <ScrollView style={commonStyles.containerHomePage}>
      <TopBar />
      <BannerSwiper />
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
      <OfferSwiper/>
      <View style={ButtonStyles.buttonContainer}>
        <CustomButton
          buttonText="Aller à l'écran suivant"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
