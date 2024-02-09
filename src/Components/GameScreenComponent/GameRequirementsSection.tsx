import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import gameStyles from "../../../Styles/GameStyles";
import { getConfigurationById } from "../../Controllers/ConfigurationController";

interface GameRequirementsSectionProps {
  item: {
    id: number;
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    directX: string;
    additionalNote: string;
    screen: string;
    configuration: string;
  };
}

const GameRequirementsSection: React.FC<GameRequirementsSectionProps> = ({ item }) => {
  const [gameRequirements, setGameRequirements] = useState({});
  useEffect(() => {
    getGameRequirements();
  }, []);
  const getGameRequirements = async () => {
    const response = await getConfigurationById(item.configuration);
    setGameRequirements(response);
  }

  return (
    <View style={gameStyles.minimumRequirementsContainer}>
      <Text style={gameStyles.textTitle}>Configuration Minimale :</Text>
      <Text style={gameStyles.text}>
        OS: {gameRequirements.operatingSystem}
      </Text>
      <Text style={gameStyles.text}>
        Processeur: {gameRequirements.processor}
      </Text>
      <Text style={gameStyles.text}>Mémoire: {gameRequirements.ramMemory}</Text>
      <Text style={gameStyles.text}>
        Graphiques: {gameRequirements.graphicsCard}
      </Text>
      <Text style={gameStyles.text}>DirectX: {gameRequirements.directX}</Text>
      <Text style={gameStyles.text}>Stockage: {gameRequirements.storage}</Text>
    </View>
  )
};

export default GameRequirementsSection;
