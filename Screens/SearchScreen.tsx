import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native'; // Importez Image
import commonStyles from '../Styles/Styles';
import { searchGame } from '../src/Controllers/GameController';
import { useNavigation } from '@react-navigation/native';

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

    return (
        <View style={commonStyles.containerHomePage}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Rechercher un jeu..."
                    value={searchTerm}
                    onChangeText={setSearchTerm}
                />
                <Button title="Rechercher" onPress={handleSearch} />
                <FlatList
                    data={games}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Game', { item: item })} style={styles.gameItem}>
                            <Image source={{ uri: item.image }} style={styles.gameImage} />
                            <Text style={styles.item}>{item.title}</Text>
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
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    gameItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    gameImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
});

export default SearchGameScreen;
