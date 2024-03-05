import React, { useEffect } from "react";
import { View, Image } from "react-native";
import commonStyles from "../../Styles/Styles";
import { StartScreenProps } from "../../Navigations/NavigationType";

const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Splash");
    }, 2000);
  }, []);

  return (
    <View style={commonStyles.containerSplash}>
      <View style={commonStyles.splashImage1}>
        <Image
          source={require("../../assets/images/blob.png")}
          style={{ height: 300, width: 300 }}
        />
      </View>
      <View style={commonStyles.splashImage2}>
        <Image
          source={require("../../assets/images/game.png")}
          style={{ width: 300, height: 200 }}
        />
      </View>
    </View>
  );
};

export default StartScreen;
