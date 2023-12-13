import React from "react";
import { ScrollView } from "react-native";
import commonStyles from "../../../Styles/Styles";
import NewTabGallery from "../TabGallery/NewTabGallery";
import BestSellsGallery from "../TabGallery/BestSellsGallery";
import slides from "../../../Data/Slides";
import SalesSlides from "../../../Data/SalesSlides";
import SalesGallery from "../TabGallery/SalesGallery";
import BestSellsSlides from "../../../Data/BestSellsSlides";

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case "Tab1":
      return (
        <ScrollView style={commonStyles.tabContent}>
          <NewTabGallery data={slides} onPress={() => console.log("pressed")} />
        </ScrollView>
      );
    case "Tab2":
      return (
        <ScrollView style={commonStyles.tabContent}>
          <BestSellsGallery
            data={BestSellsSlides}
            onPress={() => console.log("pressed")}
          />
        </ScrollView>
      );
    case "Tab3":
      return (
        <ScrollView style={commonStyles.tabContent}>
          <SalesGallery
            data={SalesSlides}
            onPress={() => console.log("pressed")}
          />
        </ScrollView>
      );
    default:
      return null;
  }
};

export default TabContent;
