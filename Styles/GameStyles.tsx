import { StyleSheet } from "react-native";

const gameStyles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        width: '95%',
        height: 200,
        marginBottom: 10,
    },
    gameImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    overlayText: {
        position: 'absolute',
        color: 'white',
    },
    text: {
        color: 'white',
        lineHeight: 30,
        left: 10,
    },
    textTitle: {
        color: 'white',
        lineHeight: 30,
        fontWeight: 'bold', 
        fontSize: 15,
    },
    gameName: {
        bottom: 10,
        left: 10,
    },
    gamePrice: {
        bottom: 10,
        right: 10,
    },
    descriptionContainer: {
        marginVertical: 15,
        display: 'flex',
        width: '95%',
        backgroundColor: '#323232',
        borderRadius: 10,
    },
    minimumRequirementsContainer: {
        paddingRight: 10,
        display: 'flex',
        width: '95%',
        backgroundColor: '#323232',
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
    },
    cardButton: {
        backgroundColor: '#2556A1',
        padding: 5,
        borderRadius: 10,
    }
});

export default gameStyles;