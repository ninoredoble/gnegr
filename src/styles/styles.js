import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },    
    section: {
        width: '100%',
    },
    logoBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginBottom: 10,
        marginHorizontal: 12,
        fontSize: 15,
        paddingVertical: 5,
    },
    button: {
        marginBottom: 10,
        marginHorizontal: 12,
        paddingVertical: 10,
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
    },
    forgotButton: {
        borderColor: '#0056B3', 
        marginTop: 10,
        marginHorizontal: 12,
        paddingVertical: 10,
        color: '#0056B3',
    },
    centeredText: {
        fontSize: 16,
        color: '#2b3244',
        textAlign: 'center',
    },
    lightTheme: {
        background: '#F9F9F9',
        text: '#000',
        buttonBackground: '#0056B3',
        inputOutline: '#A0A0A0',
        card: '#FFFFFF',
        inputText: '#000',
    },
    darkTheme: {
        background: '#1C1C1E',
        text: '#FFF',
        buttonBackground: '#0056B3',
        inputOutline: '#A0A0A0',
        card: '#2C2C2E',
        inputText: '#A9A9A9',
        placeholderText: '#A0A0A0',
    },
});

export default styles;
