import React, { useEffect } from 'react';
import { Image } from 'react-native';
import commonStyles from '../../Styles/Styles';
import { SplashScreenProps } from '../../Navigations/NavigationType';
import * as Animatable from 'react-native-animatable';
import { zoomOut, colorBackground } from '../SplashAnimation/animation';

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 1000);
  }, []);

  return (
    <Animatable.View  animation={colorBackground} style={commonStyles.containerSplash}>
      <Animatable.View
        animation={zoomOut} // Utilisez l'animation de zoomOut
        style={commonStyles.splashImage1}
      >
        <Image
          source={require('../../assets/images/blob.png')}
          style={{  height: 300 , width:300}} // Ajustez la taille selon vos besoins
        />
      </Animatable.View>
      <Animatable.View
        animation="fadeOut"
        style={commonStyles.splashImage2}
      >
        <Image
          source={require('../../assets/images/game.png')}
          style={{ width: 300, height: 200 }}
        />
      </Animatable.View>
    </Animatable.View>
  );
};

export default SplashScreen;