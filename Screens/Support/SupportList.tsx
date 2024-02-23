import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import commonStyles from '../../Styles/Styles';
import GoBack from '../../src/Components/Profile/GoBack';
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
            setError('Une erreur est survenue lors du chargement des commandes.');
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
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={commonStyles.containerHomePage}>
                <GoBack />
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={commonStyles.containerHomePage}>
            <TopBar showBackButton={true}/>
            <View style={styles.container}>
                <Text style={styles.header}>Liste des Tickets</Text>
                <Button
                    title="+ Nouveau Ticket"
                    onPress={() => navigation.navigate('CreateTicket')}
                    color="#1E90FF"
                />
                <FlatList
                    data={tickets}
                    renderItem={({ item }) => <TicketItem ticket={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        fontSize: 22,
        marginBottom: 20,
    },
    ticketItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    ticketTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default SupportListScreen;
