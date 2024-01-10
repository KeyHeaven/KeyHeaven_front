import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    orderItem: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    orderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderText: {
        fontSize: 16,
        marginBottom: 5,
    },
    orderTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007bff',
        marginBottom: 5,
    },
    orderStatus: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    statusIndicator: {
        padding: 5,
        borderRadius: 5,
        alignSelf: 'flex-end',
    },
    container: {
        paddingTop: 50,
        flex: 1,
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
});
