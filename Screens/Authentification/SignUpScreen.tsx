import React, { useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import commonStyles from "../../Styles/Styles";
import TextStyle from "../../Styles/TextStyle";
import CustomButton from "../../Components/button/CustomBtnComponent";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomInput from "../../Components/input/CustomInput";
import Toast from 'react-native-toast-message';
import { register } from "../../Controllers/AuthentificationController";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = ({ navigation }) => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Toast.show({
                type: 'error',
                text1: 'Les mots de passe ne correspondent pas.',
            });
            return;
        }

        setIsLoading(true);
        try {
            const result = await register(email, password);
            console.log(result);
            if (result && result.token) {
                Toast.show({
                    type: 'success',
                    text1: 'Inscription réussie !',
                });
                await AsyncStorage.setItem('userToken', result.token);
                navigation.navigate('Home');
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Erreur lors de l\'inscription.',
                });
            }
        } catch (error) {
            console.error(error);
            Toast.show({
                type: 'error',
                text1: 'Erreur lors de l\'inscription.',
                text2: error.message
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View style={commonStyles.containerHome}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <Image
                        source={require("../../assets/images/keylogo.png")}
                        style={styles.imageStyle}
                    />
                    <Text style={TextStyle.title}>Keyheaven</Text>
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
                    <CustomInput
                        icon={faLock}
                        placeholder="Confirmation du mot de passe"
                        isPassword={true}
                        onValueChange={setConfirmPassword}
                    />
                    <CustomButton
                        onPress={handleSignUp}
                        buttonText="S'inscrire"
                    />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 140,
        width: 135.2,
        margin: 50,
    },
});

export default SignUpScreen;
