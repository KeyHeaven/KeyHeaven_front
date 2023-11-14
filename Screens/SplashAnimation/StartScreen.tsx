import React, { useEffect } from 'react';
import { View } from 'react-native';
import commonStyles from '../../Styles';
import { StartScreenProps } from '../../Navigations/NavigationType';
import { Blob, Game } from '../../assets/svg/SvgFile';

const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Splash');
    }, 2000);
  }, []);
  return (
    <View  style={commonStyles.containerSplash}>
      <View
        style={commonStyles.splashImage1}
      >
          <Blob/>
      </View>
      <View
        style={commonStyles.splashImage2}
      >
          <Game/>
      </View>
    </View>
  );
};

export default StartScreen;
