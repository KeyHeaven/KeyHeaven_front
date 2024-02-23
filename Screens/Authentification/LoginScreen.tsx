import React, { useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, Alert } from "react-native";
import commonStyles from "../../Styles/Styles";
import TextStyle from "../../Styles/TextStyle";
import CustomButton from "../../src/Components/button/CustomBtnComponent";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../src/Components/input/CustomInput";
import { login } from "../../src/Controllers/AuthentificationController";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar-component';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarText, setSnackbarText] = useState("");
    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const result = await login(email, password);

            if (result && result.token) {
                await AsyncStorage.setItem('userToken', result.token);
                await navigation.reset('Home');
            }
        } catch (error) {
            if(error.status === 401){
                setSnackbarText("Identifiants incorrects. Veuillez vérifier vos identifiants.");
                setSnackbarVisible(true);
            } else {
                Alert.alert("Erreur", "Une erreur est survenue lors de la connexion.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={commonStyles.containerHome}>
            <View>
                <Image
                    source={require("../../assets/images/keylogo.png")}
                    style={styles.imageStyle}
                />
                <Text style={TextStyle.title}>Keyheaven</Text>
            </View>
            <CustomInput
                icon={faUser}
                placeholder="Adresse E-mail"
                onValueChange={setEmail}
            />
            <CustomInput
                icon={faLock}
                placeholder="Mot de passe"
                isPassword={true}
                onValueChange={setPassword}
            />
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <CustomButton
                    onPress={handleLogin}
                    buttonText="Se connecter"
                />
            )}
            <Snackbar
                visible={snackbarVisible}
                textMessage={snackbarText}
                actionHandler={() => setSnackbarVisible(false)}
                actionText="OK"
                backgroundColor="#ff0000"
                accentColor="#fff"
                messageColor="#fff"
                onRequestClose={() => setSnackbarVisible(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        height: 140,
        width: 135.2,
        margin: 50,
    },
});

export default LoginScreen;
