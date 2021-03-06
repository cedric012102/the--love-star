import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    chatSelectionContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginHorizontal: 35,
        marginTop: 45,
        paddingVertical: 20
    },
    chatImage: {
        width: 150, 
        height: 150, 
        borderRadius: 455,
        marginHorizontal: 12
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
        alignItems: 'flex-end',
        paddingHorizontal: 5,
        paddingVertical: 2,
   
    },
    chatSelectionBarText: {
        fontSize: 12,
        color: 'black',
        letterSpacing: 0.0,
        alignSelf: 'flex-start',
     
        marginHorizontal: 13,
        top: 12
    },
})  
