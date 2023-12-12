import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import commonStyles from "../Styles/Styles";
import { HomeScreenProps } from "../Navigations/NavigationType";
import ButtonStyles from "../src/Components/button/ButtonStyles";
import TopBar from "../src/Components/TopBar/TopBar";
import BannerSwiper from "../src/Components/BannerGallery/BannerSwiper";
import CustomButton from "../src/Components/button/CustomBtnComponent";


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => (
  <ScrollView style={commonStyles.containerHomePage}>
    <TopBar />
    <BannerSwiper />
    <View style={ButtonStyles.buttonContainer}>
      <CustomButton buttonText="Aller à l'écran suivant" onPress={() => navigation.navigate("Details")} />
    </View>
  </ScrollView>
);

export default HomeScreen;
