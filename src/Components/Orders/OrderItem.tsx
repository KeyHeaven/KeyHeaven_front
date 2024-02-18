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

const OrderItem = ({ id, purchaseDate, total, status }) => {
    const navigation = useNavigation();
    const { color, icon, text } = getStatusStyle(status);

    const handlePress = () => {
        navigation.navigate('PurchaseDetailsScreen', { purchaseId: id });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.orderItem} activeOpacity={0.7}>
            <View style={styles.orderRow}>
                <View>
                    <Text style={styles.orderText}>Commande #{id}</Text>
                    <Text style={styles.orderText}>Date: {purchaseDate}</Text>
                </View>
                <View style={styles.rightSection}>
                    <Text style={styles.orderTotal}>{`${total}€`}</Text>
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
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    orderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderText: {
        fontSize: 14,
        color: '#424242',
    },
    rightSection: {
        alignItems: 'flex-end',
    },
    orderTotal: {
        fontWeight: '600',
        fontSize: 16,
        color: '#000',
    },
    statusIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 20,
    },
    orderStatus: {
        marginLeft: 5,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default OrderItem;
