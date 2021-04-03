import React, { useState, useEffect, useRef } from "react";
import Constants from "expo-constants";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { styles } from "./styles/onboarding-three-style.js";
import { Ionicons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import * as Permissions from 'expo-permissions';
import { useNavigation } from "@react-navigation/native";
import { Pins } from "react-native-pins";


export function OnboardingThree() {
  const navigation = useNavigation();
  useEffect(()=>{
    registerForPushNotification().then(token=>console.log(token)).catch(err => console.log(Err))
  }, [])

  async function registerForPushNotification(){
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status!='granted') {
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    }
    if (status !='granted') {
      alert('Fail to get the push token');
      return;

    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token
  }


  return (
    <View style={styles.backgroundOnboarding}>
      <View style={styles.onboardingContainer}>
        <Ionicons
          name="notifications-circle-outline"
          size={123}
          color="rgb(221, 244, 244)"
        />
        <Text style={styles.mainText}>Allow Notifications</Text>
        <Text style={styles.subText}>
          We will let you know when you get new likes and followers.
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("OnboardingFour")}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonContainerText}>Allow Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.bottomText}>Not Now</Text>
        </TouchableOpacity>

        <Pins
          onRef={() => ({})}
          numberOfPins={3}
          numberOfPinsActive={3}
          activeOnly
        />
      </View>
    </View>
  );

        }
