import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const getStatusStyle = (status) => {
    switch (status) {
        case 'PAID':
            return { color: '#4CAF50', icon: 'check-circle', text: 'Payé' };
        case 'WAITING_PAYMENT':
            return { color: '#FFC107', icon: 'hourglass-empty', text: 'En attente' };
        default:
            return { color: '#9E9E9E', icon: 'help-outline', text: 'Inconnu' };
    }
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
};

const OrderItem = ({ id, purchaseDate, totalAmount, status }) => {
    const navigation = useNavigation();
    const { color, icon, text } = getStatusStyle(status);

    const handlePress = () => {
        navigation.navigate('PurchaseDetailsScreen', { purchaseId: id });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.orderItem} activeOpacity={0.7}>
            <View style={styles.orderRow}>
                <View style={styles.orderDetails}>
                    <Text style={styles.orderText}>Commande #{id}</Text>
                    <Text style={styles.orderDate}>Date: {formatDate(purchaseDate)}</Text>
                </View>
                <View style={styles.rightSection}>
                    <Text style={styles.orderTotal}>{`${(totalAmount / 100).toFixed(2)}€`}</Text>
                    <View style={[styles.statusIndicator, { backgroundColor: color }]}>
                        <Icon name={icon} size={20} color="#FFFFFF" />
                        <Text style={styles.orderStatus}>{text}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        padding: 16,
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    orderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderDetails: {
        flex: 1,
    },
    orderText: {
        fontSize: 16,
        color: '#424242',
        fontWeight: 'bold',
    },
    orderDate: {
        marginTop: 4,
        fontSize: 14,
        color: '#757575',
    },
    rightSection: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    orderTotal: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
    },
    statusIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25,
    },
    orderStatus: {
        marginLeft: 5,
        color: '#FFFFFF',
        fontSize: 14,
    },

});

export default OrderItem;
