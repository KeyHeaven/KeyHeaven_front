import React from 'react';
import { View, Text, FlatList } from 'react-native';
import commonStyles from '../../Styles/Styles';
import OrderItem from '../../src/Components/Orders/OrderItem';
import styles from '../../src/Components/Orders/OrderItemStyles';
import GoBack from '../../src/Components/Profile/GoBack';
import { OdersHistoryScreenProps } from '../../Navigations/NavigationType';

const OrderHistoryScreen: React.FC<OdersHistoryScreenProps> = ({navigation}) => {
    const orders = [
        { id: '1', date: '2024-01-08', total: '120.00€', status: 'Livré' },
        { id: '2', date: '2024-01-02', total: '89.99€', status: 'En cours' },
    ];

    return (
        <View style={commonStyles.containerHomePage}>
            <GoBack/>
            <View style={styles.container}>
                <Text style={styles.header}>Historique des Commandes</Text>
                <FlatList
                    data={orders}
                    renderItem={({ item }) => <OrderItem {...item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

export default OrderHistoryScreen;
