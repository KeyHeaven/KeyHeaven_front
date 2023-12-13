import React from "react";
import { View, Text } from "react-native";
import gameStyles from "../../../Styles/GameStyles";

const GameRequirementsSection = () => (
  <View style={gameStyles.minimumRequirementsContainer}>
    <Text style={gameStyles.textTitle}>Configuration Minimale :</Text>
    <Text style={gameStyles.text}>
      OS: Windows 10/11 avec mises à jour - 64 bits
    </Text>
    <Text style={gameStyles.text}>
      Processeur: Intel Core 2 ou AMD Athlon 64 X2
    </Text>
    <Text style={gameStyles.text}>Mémoire: 4 GB RAM</Text>
    <Text style={gameStyles.text}>
      Graphiques: Intel GMA X4500, NVIDIA GeForce 9600M GT, AMD/ATI Mobility
      Radeon HD 3650 - nécessite 256MB VRAM et DirectX 11
    </Text>
    <Text style={gameStyles.text}>DirectX: Version 11</Text>
    <Text style={gameStyles.text}>Stockage: 7 GB d'espace disponible</Text>
    <Text style={gameStyles.text}>
      Notes Additionnelles: La performance est meilleure sur des systèmes haut
      de gamme.
    </Text>
    <Text style={gameStyles.text}>Affichage: 1024x768.</Text>
  </View>
);

export default GameRequirementsSection;
