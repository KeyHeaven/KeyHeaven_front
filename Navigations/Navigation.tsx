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
import GameScreen from "../Screens/ProductScreen/GameScreen";
import CartScreen from "../Screens/CartScreen/CartScreen";
import PaymentScreen from "../Screens/CartScreen/PaymentScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import PersonalInformationScreen from "../Screens/ProfileScreen/InformationPersonnel";
import OrderHistoryScreen from "../Screens/ProfileScreen/OdersHistory";
import ChangePasswordScreen from "../Screens/ProfileScreen/ChangePassword";
import PurchaseDetailsScreen from "../Screens/Purchase/PurchaseDetail";
import SearchScreen from "../Screens/SearchScreen";
import SupportScreen from "../Screens/Support/SupportScreen";

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
      <Stack.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="PersonalInformation" component={PersonalInformationScreen} />
        <Stack.Screen name="OdersHistory" component={OrderHistoryScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="PurchaseDetailsScreen" component={PurchaseDetailsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
);

export default Navigation;
