import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import commonStyles from '../../Styles/Styles';
import CustomButton from '../../Components/button/CustomBtnComponent';
import CustomInput from '../../Components/input/CustomInput';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ChangePasswordScreenProps } from '../../Navigations/NavigationType';
import TopBar from '../../Components/TopBar/TopBar';
import { updatePassword } from '../../Controllers/AuthentificationController';

const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = ({ navigation }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = async () => {
        if (!currentPassword || !newPassword || !confirmNewPassword) {
            Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            Alert.alert('Erreur', 'Le nouveau mot de passe et la confirmation ne correspondent pas.');
            return;
        }

        try {
            const response = await updatePassword('user2@example.com', currentPassword, newPassword);

            if (response.ok) {
                Alert.alert('Succès', 'Le mot de passe a été changé avec succès.');
                navigation.navigate("Home");
            } else {
                Alert.alert('Erreur', 'Une erreur est survenue lors du changement de mot de passe.');
            }
        } catch (error) {
            console.error("Erreur lors du changement de mot de passe:", error);
            Alert.alert('Erreur', 'Une erreur est survenue lors du changement de mot de passe.');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={commonStyles.containerHomePage}>
                <TopBar showBackButton={true} />
                <View style={{ paddingTop: 50, flex: 1 }} >
                    <Text style={styles.header}>Modifier mon mot de passe</Text>

                    <CustomInput icon={faLock} placeholder="Mot de passe actuel" isPassword={true} onValueChange={setCurrentPassword} />
                    <CustomInput icon={faLock} placeholder="Nouveau mot de passe" isPassword={true} onValueChange={setNewPassword} />
                    <CustomInput icon={faLock} placeholder="Confirmer le nouveau mot de passe" isPassword={true} onValueChange={setConfirmNewPassword} />
                </View>
                <View style={{ alignItems: "center" }}>
                    <CustomButton
                        onPress={handleChangePassword}
                        buttonText="Sauvegarder"
                    />
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
});

export default ChangePasswordScreen;
