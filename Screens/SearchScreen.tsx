import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet, Image } from 'react-native';
import commonStyles from '../Styles/Styles';
import { searchGame } from '../Controllers/GameController';
import { useNavigation } from '@react-navigation/native';
import TopBar from '../Components/TopBar/TopBar';

const SearchGameScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [games, setGames] = useState([]);
    const navigation = useNavigation();

    const handleSearch = async () => {
        try {
            const response = await searchGame(searchTerm);
            setGames(response['hydra:member']);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const searchTimer = setTimeout(() => {
            if (searchTerm.trim() !== '') {
                handleSearch();
            } else {
                setGames([]);
            }
        }, 500);
        return () => clearTimeout(searchTimer);
    }, [searchTerm]);

    return (
        <View style={commonStyles.containerHomePage}>
            <TopBar showBackButton={true} />
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Rechercher un jeu..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                    placeholderTextColor="#999"
                    returnKeyType="search"
                />
                <FlatList
                    data={games}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Game', { item })} style={styles.gameItem}>
                            <Image source={{ uri: item.image }} style={styles.gameImage} />
                            <View style={styles.gameInfo}>
                                <Text style={styles.gameTitle}>{item.title}</Text>
                                <Text style={styles.gamePrice}>{item.price} €</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#f9f9f9',
        fontSize: 16,
        color: '#333',
    },
    gameItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    gameImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 20,
    },
    gameInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    gameTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    gamePrice: {
        fontSize: 16,
        color: '#666',
        fontWeight: 'bold',
    },
});

export default SearchGameScreen;
