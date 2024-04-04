import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import commonStyles from "../../Styles/Styles";
import NewTabGallery from "../TabGallery/NewTabGallery";
import BestSellsGallery from "../TabGallery/BestSellsGallery";
import SalesGallery from "../TabGallery/SalesGallery";
import { getGames, getNewGames } from "../../Controllers/GameController";
interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const [bestSellsSlides, setBestSellsSlides] = useState([]);
  const [offerSlides, setOfferSlides] = useState([]);
  const [newGames, setNewGames] = useState([]);

  useEffect(() => {


    const fetchNewGames = async () => {
      const data = await getNewGames();
      setNewGames(data['hydra:member']);
    }

    const fetchBestSellsSlides = async () => {
      const data = await getGames();
      setBestSellsSlides(data['hydra:member']);
    }
    const fetchOfferSlides = async () => {
      const data = await getGames();
      data['hydra:member'].sort(() => Math.random() - 0.5);
      setOfferSlides(data['hydra:member']);
    }

    if (activeTab === "Tab1") {
      fetchNewGames();
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
          <NewTabGallery data={newGames} />
        </ScrollView>
      );
    case "Tab2":
      return (
        <ScrollView style={commonStyles.tabContent}>
          <BestSellsGallery data={bestSellsSlides} />
        </ScrollView>
      );
    case "Tab3":
      return (
        <ScrollView style={commonStyles.tabContent}>
          <SalesGallery data={offerSlides} />
        </ScrollView>
      );
    default:
      return null;
  }
};

export default TabContent;
