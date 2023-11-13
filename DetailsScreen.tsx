// DetailsScreen.tsx
import React from 'react';
import { View, Text , Button, StyleSheet} from 'react-native';

interface DetailsScreenProps {
    navigation: any; 
  }

const DetailsScreen: React.FC<DetailsScreenProps> = ({navigation}) => (
  <View style={styles.container}>
    <Text>Écran détails</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Retour à l'écran Précédent"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  </View>
  
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      marginTop: 20,
    },
  });

export default DetailsScreen;
