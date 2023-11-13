// HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import commonStyles from './Styles';
import { HomeScreenProps } from './NavigationType';



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
