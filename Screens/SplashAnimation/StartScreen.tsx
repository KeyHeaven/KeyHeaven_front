import React, { useEffect } from 'react';
import { View,Image } from 'react-native';
import commonStyles from '../../Styles';
import { StartScreenProps } from '../../Navigations/NavigationType';

const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Splash');
    }, 2000);
  }, []);
  return (
    <View style={commonStyles.containerSplash}>
      <View style={commonStyles.splashImage1}>
      <Image source={require('../../assets/blob.png')} />
      </View>
      <View style={commonStyles.splashImage2}>
      <Image source={require('../../assets/game.png')} />
      </View>
    </View>
  );
};

export default StartScreen;
