import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { getTicketDetail } from '../../Controllers/SupportTicketController';
import commonStyles from '../../Styles/Styles';
import TopBar from '../../Components/TopBar/TopBar';

const MessageItem = ({ message }) => (
    <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
    </View>
);

const SupportDetail = ({ route, navigation }) => {
    const [ticket, setTicket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTicketDetail = async () => {
            setLoading(true);
            try {
                const ticketId = route.params.ticketId;
                const ticketData = await getTicketDetail(ticketId);
                setTicket(ticketData);
                setMessages(ticketData.messages || []);
            } catch (err) {
                setError('Une erreur est survenue lors du chargement du détail du ticket.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTicketDetail();
    }, []);

    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Chargement...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            style={commonStyles.containerHomePage}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TopBar showBackButton={true} />
            <ScrollView style={styles.container}>
                {ticket ? (
                    <>
                        <Text style={styles.title}>Ticket #{ticket.id}</Text>
                        <Text>Date: {ticket.date}</Text>
                        <Text>Status: {ticket.status}</Text>
                        <Text>Description: {ticket.description}</Text>
                        {messages.map((message, index) => (
                            <MessageItem key={index} message={message} />
                        ))}
                    </>
                ) : (
                    <Text>Le ticket demandé n'est pas disponible.</Text>
                )}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholder="Écrivez votre message..."
                />
                <Button title="Envoyer" onPress={sendMessage} />
            </View>
            <Button title="Retour" onPress={() => navigation.goBack()} />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 10,
        padding: 10,
    },
    messageContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    messageText: {
        color: 'black',
    },
});

export default SupportDetail;
