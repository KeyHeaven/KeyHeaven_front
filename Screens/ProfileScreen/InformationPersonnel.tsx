import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import commonStyles from '../../Styles/Styles';
import CustomInput from '../../src/Components/input/CustomInput';
import CustomButton from '../../src/Components/button/CustomBtnComponent';
import Avatar from '../../src/Components/Profile/Avatar';
import TopBar from '../../src/Components/TopBar/TopBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserById, updateUser } from '../../src/Controllers/userController';
import { useNavigation } from '@react-navigation/native';
import { jwtDecode } from 'jwt-decode';

const PersonalInformationScreen: React.FC = ({  }) => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState('');
    const navigation = useNavigation();
    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const user = await AsyncStorage.getItem('userToken');
                const token = jwtDecode(user);
                setUserId(token.id);

                if (token) {
                    const response = await getUserById(token.id);
                    if (response) {
                        setNom(response.lastname);
                        setPrenom(response.firstname);
                        setEmail(response.email);
                        setPhone(response.phone);
                    } else {
                        Alert.alert('Erreur', 'Impossible de récupérer les informations de l\'utilisateur');
                    }
                }
            } catch (error) {
                Alert.alert('Erreur', 'Une erreur est survenue lors du chargement des données');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };

    const isValidPhone = (phone) => {
        const re = /^\+?\d{10,}$/;
        return re.test(phone);
    };

    const handleSave = async () => {
        if (!isValidEmail(email)) {
            Alert.alert('Erreur', 'L\'adresse email n\'est pas valide.');
            return;
        }

        if (!isValidPhone(phone)) {
            Alert.alert('Erreur', 'Le numéro de téléphone n\'est pas valide.');
            return;
        }

        setIsLoading(true);
        try {
            await updateUser(userId, { firstname: prenom, lastname: nom, email, phone });
            Alert.alert('Succès', 'Informations sauvegardées avec succès');
            // @ts-ignore
            navigation.navigate("Home");
        } catch (error) {
            console.error("Erreur lors de la sauvegarde des informations", error);
            Alert.alert('Erreur', 'Une erreur est survenue lors de la sauvegarde.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <View style={commonStyles.containerHomePage}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={commonStyles.containerHomePage}>
            <TopBar showBackButton={true} />
            <View style={{ paddingTop: 50, flex: 1, paddingLeft: 10 }}>
                <Avatar uri='https://png.pngtree.com/element_our/20200610/ourmid/pngtree-default-avatar-image_2237213.jpg' />
                <Text style={styles.header}>Information Personnels</Text>
                <CustomInput placeholder="Prénom à définir" defaultValue={prenom} onValueChange={setPrenom} />
                <CustomInput placeholder="Nom à définir" defaultValue={nom} onValueChange={setNom} />
                <CustomInput placeholder="Email à définir" defaultValue={email} onValueChange={setEmail} keyboardType="email-address" />
                <CustomInput placeholder="Téléphone à définir" defaultValue={phone} onValueChange={setPhone} keyboardType="phone-pad" />
            </View>
            <View style={{ alignItems: "center" }}>
                <CustomButton onPress={handleSave} buttonText="Sauvegarder" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10,
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
