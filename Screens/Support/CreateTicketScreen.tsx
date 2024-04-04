import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import TopBar from '../../Components/TopBar/TopBar';
import commonStyles from '../../Styles/Styles';
import {
    getAllPurchaseByUser,
    getPurchaseDetailsByPurchaseId,
} from '../../Controllers/PurchaseController';
import { Picker } from '@react-native-picker/picker';
import { addSupportTicket } from '../../Controllers/SupportTicketController';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

const CreateTicketScreen = () => {
    const [ticketSubject, setTicketSubject] = useState('');
    const [ticketDescription, setTicketDescription] = useState('');
    const [selectedPurchaseId, setSelectedPurchaseId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [purchaseDetails, setPurchaseDetails] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetchPurchaseDetails();
    }, []);

    const fetchPurchaseDetails = async () => {
        setLoading(true);
        try {
            const purchases = await getAllPurchaseByUser('201');
            const detailsPromises = purchases['hydra:member'].map(async (purchase) => {
                const response = await getPurchaseDetailsByPurchaseId(purchase.id);
                return response['hydra:member'];
            });
            const details = await Promise.all(detailsPromises);
            const allPurchaseDetails = details.flat();
            console.log(allPurchaseDetails);
            setPurchaseDetails(allPurchaseDetails);
        } catch (err) {
            setError('Une erreur est survenue lors du chargement des détails de la commande.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleTicketSubmission = async () => {
        const user = await AsyncStorage.getItem('userToken');
        const token = jwtDecode(user);
        setLoading(true);
        if (!ticketSubject || !ticketDescription) {
            Alert.alert("Erreur", "Veuillez remplir au moins le sujet et la description de votre ticket.");
            setLoading(false);
            return;
        }
        await addSupportTicket(token.id, ticketSubject, ticketDescription, selectedPurchaseId);
        Alert.alert("Succès", "Votre ticket a été soumis avec succès.");
        navigation.goBack();
        setTicketSubject('');
        setTicketDescription('');
        setSelectedPurchaseId('');
        setLoading(false);
    };

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#FFFFFF" />
            </View>
        );
    }

    return (
        <ScrollView style={[commonStyles.containerHomePage]}>
            <TopBar showBackButton={true} />
            <Text style={styles.label}>Sujet du ticket</Text>
            <TextInput
                style={styles.input}
                value={ticketSubject}
                onChangeText={setTicketSubject}
                placeholder="E.g., Problème de connexion"
                placeholderTextColor="#CCCCCC"
            />
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={[styles.input, styles.multilineInput]}
                value={ticketDescription}
                onChangeText={setTicketDescription}
                placeholder="Décrivez le problème que vous rencontrez"
                multiline
                placeholderTextColor="#CCCCCC"
            />
            <Text style={styles.label}>Sélectionnez la commande (Optionnel)</Text>
            <Picker
                selectedValue={selectedPurchaseId}
                onValueChange={(itemValue) => setSelectedPurchaseId(itemValue)}
                style={styles.input}
            >
                <Picker.Item label="Sélectionnez une commande" value="" />
                {purchaseDetails.map(item => (
                    <Picker.Item key={item.id} label={`Commande #${item.id} - Jeu ${item.game}`} value={item.id} />
                ))}
            </Picker>
            <Button title="Soumettre le ticket" onPress={handleTicketSubmission} color="#007bff" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        color: '#FFFFFF',
    },
    input: {
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#666666',
        borderRadius: 5,
        color: '#FFFFFF',
    },
    multilineInput: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CreateTicketScreen;
