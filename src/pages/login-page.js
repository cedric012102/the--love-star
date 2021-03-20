import React from "react";
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  Alert,
} from "react-native";
import styles from "./styles/login-page-style";
import { PrimaryButton } from "../components/primary-button";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import * as AppleAuthentication from "expo-apple-authentication";
import * as firebase from "firebase";
import "firebase/auth";

const LoginPage = ({ navigation }) => {
  const backgroundImage = require("../img/test.jpg");
  const elephantImage = require("../img/elephant-background.png");
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <SafeAreaView style={styles.containerStyle}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Love Star</Text>
          <Image source={elephantImage} style={styles.elephantImage} />
        </View>
        <View style={styles.buttonAreaContainer}>
          <PrimaryButton
            label="Continue with Google"
            onPress={onGoogleButtonPress}
            iconName="google"
            iconColor="rgb(66, 133, 244)"
          />
          <PrimaryButton
            label="Continue with Apple"
            onPress={onAppleButtonPress}
            iconName="apple1"
            iconColor="black"
          />
          <PrimaryButton
            label="Continue with Facebook"
            onPress={onFacebookButtonPress}
            iconName="facebook-square"
            iconColor="blue"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );

  async function onGoogleButtonPress() {
    try {
      const { type, accessToken } = await Google.logInAsync({
        clientId:
          "156884841393-8p0rjlkv0137jm159oq2ecr34d296dki.apps.googleusercontent.com",
      });
      if (type === "success") {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          accessToken
        );

        // Sign in with credential from the Google.
        await firebase.auth().signInWithCredential(credential);
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Sign in failed");
    }
  }

  async function onFacebookButtonPress() {
    try {
      await Facebook.initializeAsync({
        appId: "361404388737946",
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        navigation.navigate("OnboardingOne");
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  async function onAppleButtonPress() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      navigation.navigate("OnboardingOne");
    } catch (e) {
      if (e.code === "ERR_CANCELED") {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  }
};

export default LoginPage;
