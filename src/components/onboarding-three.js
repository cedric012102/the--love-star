import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import {styles} from './styles/onboarding-three-style.js'
import { Pins } from 'react-native-pins';
import { Ionicons } from '@expo/vector-icons';
  
export function OnboardingThree() {
  return (
    <View style={styles.backgroundOnboarding}>
      <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Registration</Text>
      </View>
      <View style={styles.onboardingContainer}>
          <Ionicons name="notifications-circle-outline" size={123} color="rgb(221, 244, 244)" />
          <Text style={styles.mainText}>Allow Notifications</Text>
          <Text style={styles.subText}>We will let you know when you get new likes and followers.</Text>
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonContainerText}>Allow Notifications</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.bottomText}>Not Now</Text>
            </TouchableOpacity>
      </View>
      
      <Pins
      numberOfPins={3}
      numberOfPinsActive={3}
      numberOfPinsMaximum={3}
      activeOnly
      />
 </View>
  )
}
