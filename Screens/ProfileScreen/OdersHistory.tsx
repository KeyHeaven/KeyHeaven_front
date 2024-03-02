import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import commonStyles from '../../Styles/Styles';
import OrderItem from '../../src/Components/Orders/OrderItem';
import styles from '../../src/Components/Orders/OrderItemStyles';
import { OdersHistoryScreenProps } from '../../Navigations/NavigationType';
import { getAllPurchaseByUser } from '../../src/Controllers/PurchaseController';
import TopBar from '../../src/Components/TopBar/TopBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode}  from 'jwt-decode';
const OrderHistoryScreen: React.FC<OdersHistoryScreenProps> = ({ navigation }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchOrders();
    }, []);
    const fetchOrders = async () => {
        setLoading(true);
        const user = await AsyncStorage.getItem('userToken');
        const token = jwtDecode(user);
        try {
            const response = await getAllPurchaseByUser(token.id);
            setOrders(response['hydra:member']);
        } catch (err) {
            setError('Une erreur est survenue lors du chargement des commandes.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={commonStyles.containerHomePage}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={commonStyles.containerHomePage}>
                <TopBar showBackButton={true} />
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={commonStyles.containerHomePage}>
            <TopBar showBackButton={true} />
            <View style={styles.container}>
                <Text style={styles.header}>Historique des Commandes</Text>
                <FlatList
                    data={orders}
                    renderItem={({ item }) => <OrderItem {...item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
};

export default OrderHistoryScreen;


