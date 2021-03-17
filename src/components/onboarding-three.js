import React, { useState, useEffect, useRef } from 'react';
import Constants from 'expo-constants';
import {View, Text, TouchableOpacity, Platform } from 'react-native'
import {styles} from './styles/onboarding-three-style.js'
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import { useNavigation } from '@react-navigation/native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
  
export function OnboardingThree() {
  const navigation = useNavigation(); 
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     setNotification(notification);
  //   });

  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //     console.log(response);
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener);
  //     Notifications.removeNotificationSubscription(responseListener);
  //   };
  // }, []);

  return (
    <View style={styles.backgroundOnboarding}>
      
      <View style={styles.onboardingContainer}>
          <Ionicons name="notifications-circle-outline" size={123} color="rgb(221, 244, 244)" />
          <Text style={styles.mainText}>Allow Notifications</Text>
          <Text style={styles.subText}>We will let you know when you get new likes and followers.</Text>
            {/* <TouchableOpacity onPress={async () => {await schedulePushNotification();}}> */}
            <TouchableOpacity onPress={() => navigation.navigate('OnboardingFour')}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonContainerText}>Allow Notifications</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.bottomText}>Not Now</Text>
            </TouchableOpacity>
      </View>
      
  
 </View>
  )

  // async function schedulePushNotification() {
  //   await Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: "You've got mail! 📬",
  //       body: 'Here is the notification body',
  //       data: { data: 'goes here' },
  //     },
  //     trigger: { seconds: 2 },
  //   });
  // }
  
  // async function registerForPushNotificationsAsync() {
  //   let token;
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //     token = (await Notifications.getExpoPushTokenAsync()).data;
  //     console.log(token);
  //   } else {
  //     alert('Must use physical device for Push Notifications');
  //   }
  
  //   if (Platform.OS === 'android') {
  //     Notifications.setNotificationChannelAsync('default', {
  //       name: 'default',
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: '#FF231F7C',
  //     });
  //   }
  
  //   return token;
  // }
}
