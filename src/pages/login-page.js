import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView, Image, Alert } from 'react-native';
import styles from './styles/login-page-style';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { registerGoogleSignin } from '../utils/register-google-signin';
import {
    GoogleSignin,
    statusCodes, hasPlayServices
  } from "@react-native-community/google-signin";
import Auth from "firebase/auth";

registerGoogleSignin();

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
            <TouchableOpacity style={styles.buttonContainer} onPress={onGoogleButtonPress}>
            <AntDesign name="google" size={24} color="rgb(66, 133, 244)" style={styles.mediaIcons}/>
                <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('OnboardingThree')}>
            <AntDesign name="apple1" size={24} color="black" style={styles.mediaIcons}/>
                <Text style={styles.buttonText}>Continue with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Profile')}>
            <FontAwesome5 name="facebook" size={24} color="blue" style={styles.mediaIcons}/>
                <Text style={styles.buttonText}>Continue with Facebook</Text>
            </TouchableOpacity>
            </View>
            </SafeAreaView>
        </ImageBackground>

    );
    async function onGoogleButtonPress() {
        try {
          const isPlayServicesEnabled = await hasPlayServices();
    
          if (isPlayServicesEnabled) {
            const userInfo = await GoogleSignin.signIn();
            const idToken = userInfo.idToken;
            // Create a Google credential with the token
            const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
            // Sign-in the user with the credential into Firebase (Auth() is Firebase)
            const userCredential = await Auth().signInWithCredential(
              googleCredential
            );
            const userId = userCredential.user.uid;
    
            // Navigate to the next page here:
          } else {
            throw "Google Play Services are not supported on this device";
          }
        } catch (e) {
          if (e.code !== statusCodes.SIGN_IN_CANCELLED) {
            Alert.alert(
              "Google Login Failure",
              "Google authentication has falied. If this persists, contact us",
              [{ text: "Close", style: "destructive" }]
            );
          }
        }
      }
    
};



export default LoginPage;