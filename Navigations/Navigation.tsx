import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import SplashScreen from '../Screens/SplashAnimation/SplashScreen';
import StartScreen from '../Screens/SplashAnimation/StartScreen';

const Stack = createStackNavigator();

const Navigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Start"  
    screenOptions={{ headerShown: false }}  
    >
      {/* Chaque écrans doit etre indiqué ici  */}
      <Stack.Screen name="Start"  component={StartScreen} />
      <Stack.Screen name="Splash"  component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
);

export default Navigation;
