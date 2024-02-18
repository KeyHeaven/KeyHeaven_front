import React, { useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import commonStyles from "../../Styles/Styles";
import TextStyle from "../../Styles/TextStyle";
import CustomButton from "../../src/Components/button/CustomBtnComponent";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../src/Components/input/CustomInput";
import { login } from "../../src/Controllers/AuthentificationController";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const result = await login(email, password);

            if (result && result.token) {
                await AsyncStorage.setItem('userToken', result.token);
                navigation.navigate('Home');
            } else {
                alert("Échec de la connexion");
            }
        } catch (error) {
            console.error(error);
            alert("Une erreur s'est produite lors de la tentative de connexion.");
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
