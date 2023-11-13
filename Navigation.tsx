// Navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

const Navigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"  
    // screenOptions={{ headerShown: false }}  //pour retirer la navbar lorsqu'il y aura le front final
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
);

export default Navigation;
