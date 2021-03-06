import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView, Image } from 'react-native';
import styles from './styles/login-page-style';

const LoginPage = ({ navigation }) => {
    const backgroundImage = require('../img/test.jpg');
    const elephantImage = require('../img/elephant-background.png');
    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <SafeAreaView style={styles.containerStyle}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Love Star</Text>
                        <Image source={elephantImage} style={styles.elephantImage} />
                    </View>
                    <View style={styles.buttonAreaContainer}>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ChatList')}>
            <Image source={require('../img/google.png')} style={styles.mediaIcons}/>
                <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('OnboardingThree')}>
            <Image source={require('../img/apple.png')} style={styles.mediaIcons}/>
                <Text style={styles.buttonText}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../img/Facebook.png')} style={styles.mediaIcons}/>
                <Text style={styles.buttonText}>Continue with Facebook</Text>
            </TouchableOpacity>
            </View>
            </SafeAreaView>
        </ImageBackground>

    );
};

export default LoginPage;