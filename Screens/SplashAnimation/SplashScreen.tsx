import React, { useEffect } from 'react';
import commonStyles from '../../Styles';
import { SplashScreenProps } from '../../Navigations/NavigationType';
import * as Animatable from 'react-native-animatable';
import { zoomOut, colorBackground } from '../SplashAnimation/animation';
import { Image } from 'react-native';

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);
  return (
    <Animatable.View animation={colorBackground} style={commonStyles.containerSplash}>
      <Animatable.View animation={zoomOut} style={commonStyles.splashImage1}>
      <Image source={require('../../assets/blob.png')} />
      </Animatable.View>
      <Animatable.View animation="fadeOut" style={commonStyles.splashImage2}>
      <Image source={require('../../assets/game.png')} />
      </Animatable.View>
    </Animatable.View>
  );
};

export default SplashScreen;
