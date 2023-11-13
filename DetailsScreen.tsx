// DetailsScreen.tsx
import React from 'react';
import { View, Text , Button, StyleSheet} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import commonStyles from './Styles';

interface DetailsScreenProps {
  navigation: StackNavigationProp<any, 'Details'>;
  }

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
