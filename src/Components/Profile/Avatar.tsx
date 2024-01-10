import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ uri }) => (
    <View style={styles.avatarContainer}>
        <Image source={{ uri }} style={styles.avatar} />
    </View>
);

const styles = StyleSheet.create({
    avatarContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#555',
        marginBottom: 20,
    },
});

export default Avatar;
