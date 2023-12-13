import React from "react";
import { Modal, View, Text, StyleSheet } from "react-native";
import CustomButton from "../button/CustomBtnComponent";
import commonStyles from "../../../Styles/Styles";

const PaymentSuccessModal = ({ visible, onReturn, onDetails }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onReturn}
        >
            <View style={commonStyles.container}>
                <View style={commonStyles.modalView}>
                    <Text style={commonStyles.modalText}>Votre paiement a été validé avec succès.</Text>
                    <View style={commonStyles.modalButtons}>
                        <CustomButton
                            onPress={onReturn}
                            buttonText="Retour"
                            style={{width: 120,}}
                        />
                        <CustomButton
                            onPress={onDetails}
                            buttonText="Détails"
                            style={{width: 120,}}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default PaymentSuccessModal;
