import React, {useEffect, useState } from "react";
import { ScrollView } from "react-native";
import commonStyles from "../../../Styles/Styles";
import NewTabGallery from "../TabGallery/NewTabGallery";
import BestSellsGallery from "../TabGallery/BestSellsGallery";
import SalesGallery from "../TabGallery/SalesGallery";
import handleCardPress from "../../../logic/handleCardPress";
import {getGames} from "../../Controllers/GameController";
interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const [slides, setSlides] = useState([]);
  const [bestSellsSlides, setBestSellsSlides] = useState([]);
  const [offerSlides, setOfferSlides] = useState([]);

  useEffect(() => {
    const fetchSlides =async  () => {
      const data = await getGames();
      setSlides(data['hydra:member']);
    }

    const fetchBestSellsSlides =async () => {
      const data = await getGames();
      // sort data aleatory
        data['hydra:member'].sort(() => Math.random() - 0.5);
      setBestSellsSlides(data['hydra:member']);
    }
    const fetchOfferSlides = async() => {
      const data = await getGames();
      data['hydra:member'].sort(() => Math.random() - 0.5);
      setOfferSlides(data['hydra:member']);
    }

    if (activeTab === "Tab1") {
      fetchSlides();
    } else if (activeTab === "Tab2") {
      fetchBestSellsSlides();
    } else if (activeTab === "Tab3") {
      fetchOfferSlides();
    }
  }, [activeTab]);

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
          <BestSellsGallery data={bestSellsSlides} onPress={handleCardPress} />
        </ScrollView>
      );
    case "Tab3":
      return (
        <ScrollView style={commonStyles.tabContent}>
          <SalesGallery data={offerSlides} onPress={handleCardPress} />
        </ScrollView>
      );
    default:
      return null;
  }
};

export default TabContent;
