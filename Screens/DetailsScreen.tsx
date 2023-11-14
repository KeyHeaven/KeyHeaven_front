// DetailsScreen.tsx
import React from 'react';
import { View, Text , Button, StyleSheet} from 'react-native';
import commonStyles from '../Styles';
import { DetailsScreenProps } from '../Navigations/NavigationType';

const DetailsScreen: React.FC<DetailsScreenProps> = ({navigation}) => (
  <View style={commonStyles.container}>
    <Text>Écran détails</Text>
    <View style={commonStyles.buttonContainer}>
      <Button
        title="Retour à l'écran Précédent"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  </View>
  
);


export default DetailsScreen;
