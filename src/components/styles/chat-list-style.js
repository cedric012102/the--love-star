import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundChat: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgb(245, 221, 221)',
    },
    headerContainer: {
      backgroundColor: "rgb(221, 244, 244)",
      width: 420,
      height: 113,
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 0.0,
        width: 297,
        height: 66,
        marginLeft: 59,
        marginTop: 72,
        marginRight: 45,
    },
    enterChatContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 10,
        alignItems: "center",
        marginLeft: 75,
        marginRight: 64,
        marginTop: 33,
        width: 261,
        height: 96
    },
    enterChatText: {
        fontSize: 14,
        color: 'rgb(210, 210, 210)',
        letterSpacing: 0.0,
        textAlign: 'center',
        height: 19,
        width: 123,
        marginLeft: 70,
        marginRight: 68,
        marginTop: 30,
        marginBottom: 47,
    },
    chatSelectionContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginLeft: 33.9,
        marginRight: 17,
        marginTop: 52,
        width: 345,
        height: 165,
    },
    chatSelectionText: {
        fontSize: 14,
        color: 'rgb(96, 96, 96)',
        letterSpacing: 0.0,
        textAlign: 'center',
        height: 19,
        width: 51,
        marginLeft: 142,
        marginRight: 152,
        marginTop: 59,
        marginBottom: 87,
    },
    chatSelectionBar: {
        backgroundColor: 'rgb(221, 244, 244)',
        borderRadius: 5,
        marginLeft: 12,
        marginRight: 22,
        marginTop: 112,
        marginBottom: 21,
        width: 311,
        height: 32,
    }
    
   
})