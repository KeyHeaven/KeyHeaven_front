import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

const SupportScreen = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('general');
    const [image, setImage] = useState(null);

    const handleSubmit = async () => {
        // Logique d'envoi du ticket de support ici
        console.log({ subject, message, image });
        // Retour à l'écran précédent après la soumission
        navigation.goBack();
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Sujet de votre demande :</Text>
            <Picker
                selectedValue={subject}
                style={styles.picker}
                onValueChange={(itemValue) => setSubject(itemValue)}>
                <Picker.Item label="Général" value="general" />
                <Picker.Item label="Paiement" value="payment" />
                <Picker.Item label="Technique" value="technical" />
                <Picker.Item label="Autre" value="other" />
            </Picker>
            <Text style={styles.label}>Votre message de support :</Text>
            <TextInput
                style={styles.input}
                onChangeText={setMessage}
                value={message}
                placeholder="Décrivez votre problème"
            />
            <Button title="Choisir une image" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Envoyer" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
    },
    picker: {
        width: '100%',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
});

export default SupportScreen;
