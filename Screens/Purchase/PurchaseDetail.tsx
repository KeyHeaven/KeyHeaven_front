import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import commonStyles from '../../Styles/Styles';
import { getPurchaseById, getPurchaseDetailsByPurchaseId } from '../../src/Controllers/PurchaseController';
import TopBar from '../../src/Components/TopBar/TopBar';
import { getGameById } from '../../src/Controllers/GameController';

const PurchaseDetailsScreen = ({ route }) => {
    const [purchase, setPurchase] = useState(null);
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPurchaseAndGames = async () => {
            try {
                setIsLoading(true);
                const purchaseId = route.params.purchaseId;
                const purchaseResponse = await getPurchaseById(purchaseId);
                const purchaseDetailsResponse = await getPurchaseDetailsByPurchaseId(purchaseId);
                const tablePurchaseDetails = purchaseDetailsResponse['hydra:member'];

                const gamesPromises = tablePurchaseDetails.map(async (item) => {
                    const gameId = item.game.split('/')[3];
                    return getGameById(gameId);
                });
                const gamesResults = await Promise.all(gamesPromises);

                setPurchase(purchaseResponse);
                setGames(gamesResults);
                setIsLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de l\'achat :', error);
                setIsLoading(false);
            }
        };

        fetchPurchaseAndGames();
    }, [route.params.purchaseId]);

    if (isLoading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!purchase) {
        return (
            <View style={styles.center}>
                <Text>Détails de l'achat non disponibles</Text>
            </View>
        );
    }

    return (
        <View style={commonStyles.containerHomePage}>
            <TopBar />
            <ScrollView style={commonStyles.cartContainer}>
                <Text style={styles.title}>Détails de l'Achat</Text>
                <Text>Id: {purchase.id}</Text>
                <Text>Date: {purchase.purchaseDate}</Text>
                <Text>Total: {(purchase.totalAmount / 100)}€</Text>
                <Text>Articles:</Text>
                {games.map((game, index) => (
                    <View key={index} style={styles.item}>
                        <Image source={{ uri: game.image }} style={styles.image} />
                        <View style={styles.gameDetails}>
                            <Text style={styles.gameTitle}>{game.title}</Text>
                            <Text>{game.price}€</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => alert('Évaluer le jeu')}>
                                    <Text style={styles.buttonText}>Évaluer</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => alert('Récupérer clé')}>
                                    <Text style={styles.buttonText}>Clé d'activation</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    gameDetails: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
    },
    gameTitle: {
        fontWeight: 'bold',
    },
});

export default PurchaseDetailsScreen;
