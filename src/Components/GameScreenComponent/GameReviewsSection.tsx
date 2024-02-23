import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import gameStyles from '../../../Styles/GameStyles';

const GameReviewsSection = ({ reviews }) => {
    if (!reviews || reviews.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Aucun commentaire disponible</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={gameStyles.textTitle}>Commentaires des utilisateurs</Text>
            {reviews.map((review, index) => (
                <View key={index} style={styles.review}>
                    <Text style={gameStyles.text}>{review.id}</Text>
                    {review.comment.trim() !== '' ? (
                        <Text style={gameStyles.text}>{review.comment}</Text>
                    ) : (
                        <Text style={styles.defaultComment}>Aucun commentaire</Text>
                    )}
                    <Text style={gameStyles.text}>Note : {review.note} / 5</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingRight: 10,
        display: "flex",
        width: "95%",
        backgroundColor: "#323232",
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    review: {
        marginBottom: 10,
    },
    username: {
        fontWeight: 'bold',
    },
    defaultComment: {
        fontStyle: 'italic',
        color: '#666',
    },
});

export default GameReviewsSection;
