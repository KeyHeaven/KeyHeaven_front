import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import commonStyles from '../../Styles/Styles';
import { getAllSupportTicketsByUser } from '../../src/Controllers/SupportTicketController';
import TopBar from '../../src/Components/TopBar/TopBar';
import TicketItem from '../../src/Components/Support/TicketItem';

const SupportListScreen = ({ navigation }) => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const response = await getAllSupportTicketsByUser('201');
            setTickets(response['hydra:member']);
        } catch (err) {
            setError('Une erreur est survenue lors du chargement des tickets.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchOrders();
        }, [])
    );

    if (loading) {
        return (
            <View style={commonStyles.containerHomePage}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={commonStyles.containerHomePage}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={commonStyles.containerHomePage}>
            <TopBar showBackButton={true}/>
            <View style={styles.container}>
                <Text style={styles.header}>Liste des Tickets</Text>
                <TouchableOpacity
                    style={styles.newTicketButton}
                    onPress={() => navigation.navigate('CreateTicket')}>
                    <Text style={styles.newTicketButtonText}>+ Nouveau Ticket</Text>
                </TouchableOpacity>
                <FlatList
                    data={tickets}
                    renderItem={({ item }) => <TicketItem ticket={item} />}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={styles.listContentContainer}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    newTicketButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    newTicketButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    listContentContainer: {
        paddingBottom: 10,
    },
});

export default SupportListScreen;
