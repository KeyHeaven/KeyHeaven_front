import React, {useEffect, useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';
import { addReview } from '../../Controllers/ReviewController';

const ReviewModal = ({ visible, onClose,  game }) => {
    const [rating, setRating] = useState(3);
    const [comment, setComment] = useState('');

    useEffect(() => {
    });
    const handleSubmit = async () => {
        const review = {
            gameId: 859,
            userId: 201,
            note: rating,
            comment: comment,
        };
        await addReview(review.gameId, review.userId,  review.note, review.comment);
        console.log('Soumission de l\'avis:', review);
        onClose(); // Fermer le modal après la soumission
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <TouchableOpacity
                style={styles.modalOverlay}
                onPress={onClose}
                activeOpacity={1}
            >
                <View style={styles.modalView} onStartShouldSetResponder={() => true}>
                    <Text style={styles.modalTitle}>Donnez votre avis sur</Text>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={40}
                        showRating
                        onFinishRating={setRating}
                        style={styles.rating}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ajouter un commentaire..."
                        placeholderTextColor="#999"
                        value={comment}
                        onChangeText={setComment}
                        multiline
                    />
                    <View style={styles.buttonsRow}>
                        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                            <Text style={styles.buttonText}>Soumettre</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose} style={[styles.button, styles.buttonClose]}>
                            <Text style={styles.buttonText}>Fermer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: "#f2f2f2",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    input: {
        height: 100,
        width: '100%',
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        textAlignVertical: 'top',
    },
    rating: {
        paddingVertical: 20,
    },
    buttonSubmit: {
        width: '80%',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonClose: {
        width: '80%',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#f44336',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: '#4CAF50',
    },
});

export default ReviewModal;
