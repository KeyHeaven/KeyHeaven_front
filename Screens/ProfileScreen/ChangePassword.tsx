import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import commonStyles from '../../Styles/Styles';
import CustomButton from '../../src/Components/button/CustomBtnComponent';
import CustomInput from '../../src/Components/input/CustomInput';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ChangePasswordScreenProps } from '../../Navigations/NavigationType';
import GoBack from '../../src/Components/Profile/GoBack';

const ChangePasswordScreen: React.FC<ChangePasswordScreenProps> = ({navigation}) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={commonStyles.containerHomePage}>
                <GoBack />
                <View style={{paddingTop: 50, flex: 1}} >
                    <Text style={styles.header}>Modifier mon mot de passe</Text>

                    <CustomInput icon={faLock} placeholder="Mot de passe actuel" isPassword={true} onValueChange={setCurrentPassword} />
                    <CustomInput icon={faLock} placeholder="Nouveau mot de passe" isPassword={true} onValueChange={setNewPassword}/>
                    <CustomInput icon={faLock} placeholder="Confirmer le nouveau mot de passe" isPassword={true} onValueChange={setConfirmNewPassword}/>
                </View>
                <View style={{ alignItems: "center" }}>
                    <CustomButton
                        onPress={() => navigation.navigate("Home")}
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
