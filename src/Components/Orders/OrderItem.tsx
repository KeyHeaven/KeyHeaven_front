import React from 'react';
import { View, Text } from 'react-native';
import styles from './OrderItemStyles';
import { getStatusColor } from '../../Utils/color';

const OrderItem = ({ id, date, total, status }) => (
    <View style={styles.orderItem}>
        <View style={styles.orderRow}>
            <View>
                <Text style={styles.orderText}>Commande #{id}</Text>
                <Text style={styles.orderText}>Date: {date}</Text>
            </View>
            <View>
                <Text style={styles.orderTotal}>{total}</Text>
                <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(status) }]}>
                    <Text style={styles.orderStatus}>{status}</Text>
                </View>
            </View>
        </View>
    </View>
);

export default OrderItem;
