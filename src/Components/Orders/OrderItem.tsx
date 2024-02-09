import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const getStatusStyle = (status) => {
    switch (status) {
        case 'PAID':
            return { color: '#008000', icon: 'check-circle', text: 'Payé' };
        case 'WAITING_PAYMENT':
            return { color: '#FFA500', icon: 'hourglass-empty', text: 'En attente' };
        default:
            return { color: '#808080', icon: 'help-outline', text: 'Inconnu' };
    }
};

const OrderItem = ({ id, purchaseDate, total, status }) => {
    const navigation = useNavigation();
    const { color, icon, text } = getStatusStyle(status);

    const handlePress = () => {
        navigation.navigate('PurchaseDetailsScreen', { purchaseId: id });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.orderItem}>
            <View style={styles.orderRow}>
                <View>
                    <Text style={styles.orderText}>Commande #{id}</Text>
                    <Text style={styles.orderText}>Date: {purchaseDate}</Text>
                </View>
                <View style={styles.rightSection}>
                    <Text style={styles.orderTotal}>{`${total}€`}</Text>
                    <View style={[styles.statusIndicator, { backgroundColor: color }]}>
                        <Icon name={icon} size={16} color="#FFFFFF" />
                        <Text style={styles.orderStatus}>{text}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
    },
    orderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderText: {
        fontSize: 16,
    },
    rightSection: {
        alignItems: 'flex-end',
    },
    orderTotal: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    statusIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 15,
    },
    orderStatus: {
        marginLeft: 5,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default OrderItem;
