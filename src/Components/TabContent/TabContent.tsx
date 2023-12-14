import React from "react";
import { ScrollView } from "react-native";
import commonStyles from "../../../Styles/Styles";
import NewTabGallery from "../TabGallery/NewTabGallery";
import BestSellsGallery from "../TabGallery/BestSellsGallery";
import slides from "../../../Data/Slides";
import SalesGallery from "../TabGallery/SalesGallery";
import BestSellsSlides from "../../../Data/BestSellsSlides";
import OfferSlides from "../../../Data/OfferSlides";

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
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
  switch (activeTab) {
    case "Tab1":
      return (
        <ScrollView style={commonStyles.tabContent}>
          <NewTabGallery data={slides} onPress={handleCardPress} />
        </ScrollView>
      );
    case "Tab2":
      return (
        <ScrollView style={commonStyles.tabContent}>
          <BestSellsGallery data={BestSellsSlides} onPress={handleCardPress} />
        </ScrollView>
      );
    case "Tab3":
      return (
        <ScrollView style={commonStyles.tabContent}>
          <SalesGallery data={OfferSlides} onPress={handleCardPress} />
        </ScrollView>
      );
    default:
      return null;
  }
};

export default TabContent;
