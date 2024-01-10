import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const GoBack = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity style={styles.iconContainer} onPress={handleGoBack}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} color="#333" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        top: 30,
        zIndex: 1,
        padding: 20
    },
});

export default GoBack;
