import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import gameStyles from "../../../Styles/GameStyles";
const GameRequirementsSection: React.FC = ({ item }) => {

  return (
    <View style={gameStyles.minimumRequirementsContainer}>
      <Text style={gameStyles.textTitle}>Configuration Minimale :</Text>
      <Text style={gameStyles.text}>
        OS: {item.Configuration.operatingSystem}
      </Text>
      <Text style={gameStyles.text}>
        Processeur: {item.Configuration.processor}
      </Text>
      <Text style={gameStyles.text}>Mémoire: {item.Configuration.ramMemory}</Text>
      <Text style={gameStyles.text}>
        Graphiques: {item.Configuration.graphicsCard}
      </Text>
      <Text style={gameStyles.text}>DirectX: {item.Configuration.directX}</Text>
      <Text style={gameStyles.text}>Stockage: {item.Configuration.storage}</Text>
    </View>
  )
};

export default GameRequirementsSection;
