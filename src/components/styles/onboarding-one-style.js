import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
        backgroundOnboarding: {
            flex: 1,
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
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            letterSpacing: 0.0,
            width: 297,
            height: 66,
            marginLeft: 59,
            marginTop: 22,
            marginRight: 45,
            bottom: 7
        },
        onboardingContainer: {
            alignItems: 'center'
        },
        elephantImage: {
            paddingVertical: 28,
            marginHorizontal: 137,
            height: 124,
            width: 138,
        },
        mainText: {
            fontSize: 48,
            letterSpacing: 0.0,
            top: 18,
            textAlign: 'center',
            paddingHorizontal: 52,
        },
        subText: {
            fontSize: 20,
            letterSpacing: 0.0,
            top: 69,
            textAlign: 'center',
            paddingHorizontal: 50,
        },
});