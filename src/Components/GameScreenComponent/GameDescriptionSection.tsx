import React from "react";
import { View, Text } from "react-native";
import gameStyles from "../../../Styles/GameStyles";

const GameDescriptionSection: React.FC = ({ item }) => {
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    return (
        <View style={gameStyles.descriptionContainer}>
            <Text style={gameStyles.textTitle}> À Propos du jeu</Text>
            <Text style={gameStyles.text}>Développeur : {item.developer.name}</Text>
            <Text style={gameStyles.text}>Éditeur : {item.Editor.name}</Text>
            <Text style={gameStyles.text}>Date de Sortie : {formatDate(item.exitDate)}</Text>
            <Text style={gameStyles.text}>Genre : {item.genre}</Text>
        </View>
    );
}

export default GameDescriptionSection;
