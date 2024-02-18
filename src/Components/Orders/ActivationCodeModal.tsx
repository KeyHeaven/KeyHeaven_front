import React, {useEffect, useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Assurez-vous d'avoir installé react-native-vector-icons
import { getActivationCodeByPurchaseId } from '../../Controllers/ActivationCodeController';

const ActivationCodeModal = ({ visible, onClose, game, purchaseDetails }) => {
    const [secureText, setSecureText] = useState(true);
    const [activationCode, setActivationCode] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            getActivationCode();
    }, []);

    const getActivationCode = async () => {
        setIsLoading(true);
        const data = await getActivationCodeByPurchaseId(purchaseDetails.id);
        setActivationCode(data.code);
        setIsLoading(false);
    }
    const handleModalClose = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <TouchableOpacity
                style={styles.centeredView}
                onPress={handleModalClose}
                activeOpacity={1}
            >
                <View style={styles.centeredView} onStartShouldSetResponder={() => true}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Clé d'activation pour {game.title}:</Text>
                            <View style={styles.codeContainer}>
                                <TextInput
                                    style={styles.codeInput}
                                    value={activationCode || 'Chargement...'}
                                    editable={false}
                                    secureTextEntry={secureText}
                                />
                                <TouchableWithoutFeedback onPress={() => setSecureText(!secureText)}>
                                    <Icon name={secureText ? "eye-off" : "eye"} size={24} color="#000" />
                                </TouchableWithoutFeedback>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={onClose}>
                                <Text style={styles.textStyle}>Fermer</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    codeText: {
        marginBottom: 15,
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: "#2196F3",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    codeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    codeInput: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
    },
});

export default ActivationCodeModal;
