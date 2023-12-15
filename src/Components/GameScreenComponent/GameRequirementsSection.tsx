import React from "react";
import { View, Text } from "react-native";
import gameStyles from "../../../Styles/GameStyles";

interface GameRequirementsSectionProps {
  item: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    directX: string;
    additionalNote: string;
    screen: string;
  };
}

const GameRequirementsSection: React.FC<GameRequirementsSectionProps> = ({item}) => (
  <View style={gameStyles.minimumRequirementsContainer}>
    <Text style={gameStyles.textTitle}>Configuration Minimale :</Text>
    <Text style={gameStyles.text}>
      OS: {item.os}
    </Text>
    <Text style={gameStyles.text}>
      Processeur: {item.processor}
    </Text>
    <Text style={gameStyles.text}>Mémoire: {item.memory}</Text>
    <Text style={gameStyles.text}>
      Graphiques: {item.graphics}
    </Text>
    <Text style={gameStyles.text}>DirectX: {item.directX}</Text>
    <Text style={gameStyles.text}>Stockage: {item.storage}</Text>
    <Text style={gameStyles.text}>
      Notes Additionnelles: {item.additionalNote}
    </Text>
    <Text style={gameStyles.text}>Affichage: {item.screen}</Text>
  </View>
);

export default GameRequirementsSection;
