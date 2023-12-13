import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { GameScreenProps } from "../../Navigations/NavigationType";
import commonStyles from "../../Styles/Styles";
import gameStyles from "../../Styles/GameStyles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Counter from "../../src/Components/button/Counter";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import TopBar from "../../src/Components/TopBar/TopBar";
import { ScrollView } from "react-native-gesture-handler";

const GameScreen: React.FC<GameScreenProps> = ({ navigation }) => (
  <ScrollView style={commonStyles.containerHomePage}>
    <TopBar />
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <FontAwesomeIcon
        style={{
          height: 40,
          width: 40,
          marginTop: 50,
          marginLeft: 10,
          color: "#272727",
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 50,
        }}
        icon={faArrowLeft}
      />
    </TouchableOpacity>
    <View style={commonStyles.containerHomeGame}>
      <View style={gameStyles.imageContainer}>
        <Image
          style={gameStyles.gameImage}
          source={require("../../assets/images/baldur.jpg")}
        />
        <Text style={[gameStyles.gameName, gameStyles.overlayText]}>
          {"Baldur's Gate 3"}
        </Text>
        <Text
          style={[
            gameStyles.gamePrice,
            gameStyles.overlayText,
          ]}>{`€${"69.99"}`}</Text>
      </View>

      <View style={gameStyles.buttonContainer}>
        <TouchableOpacity style={gameStyles.cardButton}>
          <FontAwesomeIcon
            style={{
              height: 25,
              width: 25,
              color: "#fff",
            }}
            icon={faShoppingCart}
          />
        </TouchableOpacity>

        <Counter></Counter>

        <TouchableOpacity
          style={gameStyles.cardButtonPay}
          onPress={() => console.log("Bouton pressé")}>
          <Text style={gameStyles.textTitle}>Ajouter au panier</Text>
        </TouchableOpacity>
      </View>

      <View style={gameStyles.descriptionContainer}>
        <Text style={gameStyles.textTitle}> A Propos du jeu</Text>
        <Text style={gameStyles.text}>Developpeur: {"Larian Studios"}</Text>
        <Text style={gameStyles.text}>Editeur: {"Larian Studios"}</Text>
        <Text style={gameStyles.text}>Date de Sortie: {"3 août 2023"}</Text>
        <Text style={gameStyles.text}>
          Genre: {"Jeux solo, Aventure,RPG, Stratégie"}
        </Text>
      </View>

      <View style={gameStyles.minimumRequirementsContainer}>
        <Text style={gameStyles.textTitle}>Configuration Minimale:</Text>
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
          Notes Additionnelles: La performance est meilleure sur des systèmes
          haut de gamme.
        </Text>
        <Text style={gameStyles.text}>Affichage: 1024x768.</Text>
      </View>
    </View>
  </ScrollView>
);

export default GameScreen;
