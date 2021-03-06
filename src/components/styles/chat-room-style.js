import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    backgroundChat: {
        flex: null,
        width: '100%',
        backgroundColor: 'rgb(245, 221, 221)',
        
    },
    headerContainer: {
        backgroundColor: "rgb(221, 244, 244)",
        width: 420,
        height: 113,
        paddingVertical: 25,
        paddingHorizontal: 15,
        alignItems: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
     },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        letterSpacing: 0.0,
        width: 297,
        height: 66,
        marginLeft: 59,
        marginTop: 22,
        marginRight: 45,
        bottom: 27
    },
    profileIcon: {
        width: 44,
        height: 44,
        borderRadius: 44/2,
        backgroundColor: 'rgb(196, 196, 196)',
        marginHorizontal: 12,
        marginVertical: 118,
    },
    chatContainer: {
        borderRadius: 8,
        backgroundColor: 'white',
        paddingVertical: 25,
        marginHorizontal: 67,
        position: 'relative', bottom: 164, left: 16,
        paddingHorizontal: 10,
    },
    messageContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 10,
        marginHorizontal: 50,
        paddingHorizontal: 5,
        marginTop: 270,
        marginBottom: 34,
        alignItems: 'flex-end',
    },
    messageContainerText: {
        color: "rgb(170, 176, 183)",
        fontSize: 14,
        marginHorizontal: 26,
        top: 15,
        letterSpacing: 0.0,
        alignSelf: 'flex-start'
    }
})