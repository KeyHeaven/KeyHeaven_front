import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CartScreenProps } from "../../Navigations/NavigationType";
import commonStyles from "../../Styles/Styles";

const ProfileScreen: React.FC<CartScreenProps> = ({ navigation }) => {
    useEffect(() => {
    }, []);

    return (
        <View style={[commonStyles.containerHomePage, { flex: 1, justifyContent: 'space-between' }]}>
            <View style={{ paddingTop: 75, flex: 1 }}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar} />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Information Personnels</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mes Adresses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Voir mes Commandes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Modifier Mot de Passe</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={[styles.button, styles.deleteAccountButton]}>
                <Text style={styles.buttonText}>Suppression de Compte</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#555',
        marginBottom: 20,
    },
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
    deleteAccountButton: {
        backgroundColor: '#2B7EB1',
        padding: 20,
        width: '90%',
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
    },
});

export default ProfileScreen;
