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
        paddingHorizontal: 4,
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
    },
    headerBackText: {
        fontSize: 20,
        color: 'rgb(0, 0, 0)',
        letterSpacing: 0.0,
        textAlign: 'left',
    },
    enterChatContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: 18,
        marginHorizontal: 55,
        marginTop: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
    },
    enterChatText: {
        fontSize: 14,
        color: 'rgb(210, 210, 210)',
        letterSpacing: 0.0,
        textAlign: 'center',
        marginBottom: 16
    },
    chatSelectionContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginHorizontal: 35,
        marginTop: 45,
        paddingVertical: 20
    },
    chatSelectionText: {
        fontSize: 14,
        color: 'rgb(96, 96, 96)',
        letterSpacing: 0.0,
        textAlign: 'center',
    },
    chatSelectionBar: {
        backgroundColor: 'rgb(221, 244, 244)',
        borderRadius: 5,
        marginTop: 16,
        marginHorizontal: 32,
    },
    chatSelectionBarText: {
        fontSize: 12,
        color: 'black',
        letterSpacing: 0.0,
        textAlign: "center",
        paddingVertical: 9,
        marginHorizontal: 13,
    },
    chatImage: {
        width: 150, 
        height: 150, 
        borderRadius: 455,
        marginHorizontal: 12,
    },
})