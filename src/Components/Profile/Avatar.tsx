import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Avatar = ({ uri }) => (
    <View style={styles.avatarContainer}>
        <View style={styles.avatarOverlay}>
            <Image source={{ uri }} style={styles.avatar} />
            <TouchableOpacity style={styles.editIcon} >
                <FontAwesome name="pencil" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
    avatarContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    avatarOverlay: {
        position: 'relative',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#555',
    },
    editIcon: {
        position: 'absolute',
        right: -10,
        bottom: 0,
        backgroundColor: 'royalblue',
        borderRadius: 20,
        padding: 6,
    },
});

export default Avatar;
