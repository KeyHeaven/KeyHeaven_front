// HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import commonStyles from './Styles';

interface HomeScreenProps {
  navigation: StackNavigationProp<any, 'Home'>; 
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => (
  <View style={commonStyles.container}>
    <Text>Accueil</Text>
    <View style={commonStyles.buttonContainer}>
      <Button
        title="Aller à l'écran suivant"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  </View>
);


export default HomeScreen;
