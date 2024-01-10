import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import commonStyles from '../../Styles/Styles';
import CustomInput from '../../src/Components/input/CustomInput';
import CustomButton from '../../src/Components/button/CustomBtnComponent';
import Avatar from '../../src/Components/Profile/Avatar';
import GoBack from '../../src/Components/Profile/GoBack';
import { PersonalInformationScreenProps } from '../../Navigations/NavigationType';

const PersonalInformationScreen: React.FC<PersonalInformationScreenProps> = ({ navigation }) => {
    const [nom, setNom] = useState('Beaumont');
    const [prenom, setPrenom] = useState('Matthieu');
    const [email, setEmail] = useState('me@matthieu.pw');
    const [phone, setPhone] = useState('0666666666');

    const handleSave = () => {
        navigation.navigate("Home");
    }

    return (
        <View style={commonStyles.containerHomePage}>
            <GoBack />
            <View style={{ paddingTop: 50, flex: 1, paddingLeft: 10 }}>

                <Avatar uri='avatar-image-url' />

                <Text style={styles.header}>Information Personnels</Text>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Prénom</Text>
                    <CustomInput placeholder="Prénom" defaultValue={prenom} onValueChange={setPrenom} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nom</Text>
                    <CustomInput placeholder="Nom" defaultValue={nom} onValueChange={setNom} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <CustomInput placeholder="Email" defaultValue={email} onValueChange={setEmail} keyboardType="email-address" />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Téléphone</Text>
                    <CustomInput placeholder="Téléphone" defaultValue={phone} onValueChange={setPhone} keyboardType="phone-pad" />
                </View>

            </View>
            <View style={{ alignItems: "center" }}>
                <CustomButton
                    onPress={() => handleSave}
                    buttonText="Sauvegarder"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10,
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: "white",
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default PersonalInformationScreen;
