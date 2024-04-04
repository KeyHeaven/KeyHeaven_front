import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';
import { jwtDecode } from 'jwt-decode';

// Importez tous vos écrans ici
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashAnimation/SplashScreen';
import StartScreen from '../Screens/SplashAnimation/StartScreen';
import AuthScreen from '../Screens/Authentification/AuthScreen';
import LoginScreen from '../Screens/Authentification/LoginScreen';
import SignUpScreen from '../Screens/Authentification/SignUpScreen';
import GameScreen from '../Screens/ProductScreen/GameScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';
import PaymentScreen from '../Screens/CartScreen/PaymentScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import PersonalInformationScreen from '../Screens/ProfileScreen/InformationPersonnel';
import OrderHistoryScreen from '../Screens/ProfileScreen/OdersHistory';
import ChangePasswordScreen from '../Screens/ProfileScreen/ChangePassword';
import PurchaseDetailsScreen from '../Screens/Purchase/PurchaseDetail';
import SearchScreen from '../Screens/SearchScreen';
import SupportDetail from '../Screens/Support/SupportDetail';
import SupportList from '../Screens/Support/SupportList';
import CreateTicketScreen from '../Screens/Support/CreateTicketScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState<string | null>(null);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (token) {
                    const decoded = jwtDecode(token);
                    if (decoded.exp * 1000 > Date.now()) {
                        setUserToken(token);
                    } else {
                        await AsyncStorage.removeItem('userToken');
                        setUserToken(null);
                    }
                }
            } catch (error) {
                console.error('Failed to load the token', error);
            }
            setIsLoading(false);
        };

        checkToken();
    }, []);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {userToken ? (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Game" component={GameScreen} />
                        <Stack.Screen name="Cart" component={CartScreen} />
                        <Stack.Screen name="Payment" component={PaymentScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                        <Stack.Screen name="PersonalInformation" component={PersonalInformationScreen} />
                        <Stack.Screen name="OdersHistory" component={OrderHistoryScreen} />
                        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
                        <Stack.Screen name="PurchaseDetailsScreen" component={PurchaseDetailsScreen} />
                        <Stack.Screen name="Search" component={SearchScreen} />
                        <Stack.Screen name="SupportDetail" component={SupportDetail} />
                        <Stack.Screen name="SupportList" component={SupportList} />
                        <Stack.Screen name="CreateTicket" component={CreateTicketScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Start" component={StartScreen} />
                        <Stack.Screen name="Splash" component={SplashScreen} />
                        <Stack.Screen name="Auth" component={AuthScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
