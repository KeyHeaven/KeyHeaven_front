import React, { useEffect } from 'react';
import commonStyles from '../../Styles';
import { SplashScreenProps } from '../../Navigations/NavigationType';
import * as Animatable from 'react-native-animatable';
import { Blob, Game } from '../../assets/svg/SvgFile';
import { zoomOut, colorBackground } from '../SplashAnimation/animation';


const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);

  return (
    <Animatable.View animation={colorBackground} style={commonStyles.containerSplash}>
      <Animatable.View animation={zoomOut} style={commonStyles.splashImage1}>
        <Blob />
      </Animatable.View>
      <Animatable.View animation="fadeOut" style={commonStyles.splashImage2}>
        <Game />
      </Animatable.View>
    </Animatable.View>
  );
};

export default SplashScreen;
