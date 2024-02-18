import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import commonStyles from '../../Styles/Styles';
import { getPurchaseById, getPurchaseDetailsByPurchaseId } from '../../src/Controllers/PurchaseController';
import TopBar from '../../src/Components/TopBar/TopBar';
import { getGameById } from '../../src/Controllers/GameController';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReviewModal from '../../src/Components/Review/ReviewModal';
import ActivationCodeModal from '../../src/Components/Orders/ActivationCodeModal';
import SupportModal from '../../src/Components/Support/SupportModal';
import { useNavigation } from '@react-navigation/native';

const PurchaseDetailsScreen = ({ route }) => {
    const [purchase, setPurchase] = useState(null);
    const [games, setGames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [reviewModalVisible, setReviewModalVisible] = useState(false);
    const [currentGameForReview, setCurrentGameForReview] = useState(null);
    const [activationCodeModalVisible, setActivationCodeModalVisible] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);
    const [selectedPurchaseDetails, setSelectedPurchaseDetails] = useState(null);
    const [purchaseDetails, setPurchaseDetails] = useState(null);
    const [supportModalVisible, setSupportModalVisible] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchPurchaseAndGames = async () => {
            try {
                setIsLoading(true);
                const purchaseId = route.params.purchaseId;
                const purchaseResponse = await getPurchaseById(purchaseId);
                const purchaseDetailsResponse = await getPurchaseDetailsByPurchaseId(purchaseId);
                const tablePurchaseDetails = purchaseDetailsResponse['hydra:member'];
                setPurchaseDetails(tablePurchaseDetails);
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
    const openReviewModal = (game) => {
        setCurrentGameForReview(game);
        setReviewModalVisible(true);
    };
    const openActivationCodeModal = (game) => {
        setSelectedGame(game);
        const data = purchaseDetails.find((pd) => pd.game == game['@id']);
        setSelectedPurchaseDetails(data);
        setActivationCodeModalVisible(true);
    };

    return (
        <View style={commonStyles.containerHomePage}>
            <TopBar />
            <ScrollView style={commonStyles.cartContainer}>
                <Text style={styles.title}>Détails de l'Achat</Text>
                <View style={styles.purchaseDetails}>
                    <Text style={styles.detailText}>Id: {purchase.id}</Text>
                    <Text style={styles.detailText}>Date: {purchase.purchaseDate}</Text>
                    <Text style={styles.detailText}>Total: {(purchase.totalAmount / 100).toFixed(2)}€</Text>
                </View>
                <Text style={styles.sectionTitle}>Articles:</Text>
                {games.map((game, index) => (
                    <View key={index} style={styles.card}>
                        <Image source={{ uri: game.image }} style={styles.image} />
                        <View style={styles.gameDetails}>
                            <Text style={styles.gameTitle}>{game.title}</Text>
                            <Text style={styles.priceText}>{game.price}€</Text>
                            <View style={styles.buttonContainer}>

                                <TouchableOpacity style={styles.button} onPress={() => openReviewModal(game)}>
                                    <Icon name="star-outline" size={20} color="#FFFFFF" />
                                    <Text style={styles.buttonText}>Évaluer</Text>
                                </TouchableOpacity>


                                <TouchableOpacity style={styles.button} onPress={() => openActivationCodeModal(game)}>
                                    <Icon name="key-variant" size={20} color="#FFFFFF" />
                                    <Text style={styles.buttonText}>Clé d'activation</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
                <TouchableOpacity
                    style={styles.supportButton}
                    onPress={() => {navigation.navigate('SupportScreen')}}>
                    <Text style={styles.supportButtonText}>Ouvrir un ticket de support</Text>
                </TouchableOpacity>
            </ScrollView>
            <ReviewModal
                game={currentGameForReview}
                visible={reviewModalVisible}
                onClose={() => setReviewModalVisible(false)}
            />
            <ActivationCodeModal
                purchaseDetails={selectedPurchaseDetails}
                visible={activationCodeModalVisible}
                onClose={() => setActivationCodeModalVisible(false)}
                game={selectedGame || {}}
            />
            <SupportModal
                visible={supportModalVisible}
                onClose={() => setSupportModalVisible(false)}
                onSubmit={(data) => {}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    supportButton: {
        backgroundColor: '#4CAF50', // Choisissez une couleur qui s'intègre bien dans votre design
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    supportButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purchaseDetails: {
        marginBottom: 20,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 8,
        marginRight: 10,
    },
    gameDetails: {
        flex: 1,
    },
    gameTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    priceText: {
        fontSize: 16,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 8,
        borderRadius: 5,
    },
    buttonText: {
        color: '#ffffff',
        marginLeft: 5,
    },
});

export default PurchaseDetailsScreen;
