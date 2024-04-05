import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import gameStyles from '../../Styles/GameStyles';

const Counter = ({ onCountChanged }) => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        if (onCountChanged) {
            onCountChanged(count);
        }
    }, [count]);
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count === 1) return;
        setCount(count - 1);
    };

    return (
        <View style={gameStyles.mathContainer}>
            <TouchableOpacity style={gameStyles.MathSign} onPress={decrement}>
                <Text style={gameStyles.textTitle}>-</Text>
            </TouchableOpacity>
            <Text style={[gameStyles.textTitle, styles.countText]}>{count}</Text>
            <TouchableOpacity style={gameStyles.MathSign} onPress={increment}>
                <Text style={gameStyles.textTitle}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    countText: {
        fontSize: 18,
        marginHorizontal: 10,
    },
});

export default Counter;
