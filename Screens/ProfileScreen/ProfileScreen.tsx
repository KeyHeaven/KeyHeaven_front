import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {ProfileScreenProps} from "../../Navigations/NavigationType";
import commonStyles from "../../Styles/Styles";
import CustomButton from "../../src/Components/button/CustomBtnComponent";
import Avatar from "../../src/Components/Profile/Avatar";
import GoBack from "../../src/Components/Profile/GoBack";

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    useEffect(() => {
    }, []);

    const handlePersonalInformation = () => {
        navigation.navigate("PersonalInformation");
    }
    const handleOrderHistory = () => {
        navigation.navigate("OdersHistory");
    }
    const handleChangePassword = () => {
        navigation.navigate("ChangePassword");
    }
    const handleLogout = () => {
        navigation.navigate("Login");
    }

    return (
        <View style={[commonStyles.containerHomePage, { flex: 1, justifyContent: 'space-between' }]}>
            <GoBack/>

            <View style={{ paddingTop: 75, flex: 1 }}>
                <Avatar uri='avatar-image-url' />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handlePersonalInformation}>
                        <Text style={styles.buttonText}>Information Personnels</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mes Adresses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleOrderHistory}>
                        <Text style={styles.buttonText}>Voir mes Commandes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                        <Text style={styles.buttonText}>Modifier Mot de Passe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleLogout}>
                        <Text style={styles.buttonText}>Déconnexion</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={{ alignItems: "center" }}>
                <CustomButton
                    onPress={() => navigation.navigate("Home")}
                    buttonText="Suppression de Compte"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#333',
        padding: 20,
        width: '90%',
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
    },
});

export default ProfileScreen;
