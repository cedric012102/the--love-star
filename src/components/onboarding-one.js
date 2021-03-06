import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles/onboarding-one-style';
import { Pins } from 'react-native-pins';

export function OnboardingOne() {
    return (
        <View style={styles.backgroundOnboarding}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Registration</Text>
            </View>
            <View style={styles.onboardingContainer}>
                <Image source={require('../img/elephantImage.png')} style={styles.elephantImage} />
                <Text style={styles.mainText}>Welcome To Love Star</Text>
                <Text style={styles.subText}>Were so happy you are here! Before we go to your profile, let us tell you whats in store!</Text>
            </View>
            <Pins
            numberOfPins={3}
            numberOfPinsActive={3}
            numberOfPinsMaximum={3}
            activeOnly
            />
         </View>
    );
}