import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "../Screens/HomeScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import SplashScreen from "../Screens/SplashAnimation/SplashScreen";
import StartScreen from "../Screens/SplashAnimation/StartScreen";
import AuthScreen from "../Screens/Authentification/AuthScreen";
import LoginScreen from "../Screens/Authentification/LoginScreen";
import SignUpScreen from "../Screens/Authentification/SignUpScreen";
import CartScreen from "../Screens/CartScreen";

const Stack = createStackNavigator();

const Navigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{ headerShown: false }}>
      {/* Chaque écrans doit etre indiqué ici  */}
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
);

export default Navigation;
