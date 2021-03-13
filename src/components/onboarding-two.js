import React from 'react'
import {View, Text} from 'react-native'
import {styles} from './styles/onboarding-two-style.js'
import { Pins } from 'react-native-pins';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export function OnboardingTwo() {
  return (
    <View style={styles.backgroundOnboarding}>
 
    
    <View style={styles.onboardingContainer}>
            <Text style={styles.mainText}>Whats In Here?</Text>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="home" size={46} color="rgb(221, 244, 244)" />
            </View>

            <Text style={styles.subText}>News Feed</Text>
            <Text style={styles.subSubText}>See pictures and videos from users you are following and if you like them, give them some love.</Text>
            
          <View style={styles.dividerLine}></View>

            <View style={styles.iconContainer}>
              <Entypo name="circle-with-plus" size={46} color="rgb(221, 244, 244)" />
            </View>

            <Text style={styles.subText}>Post</Text>
            <Text style={styles.subSubText}>Take photos or videos to see how they rate. The more likes, the higher your heart rating grows.</Text>

            <View style={styles.dividerLine}></View>

            <View style={styles.iconContainer}>
            <FontAwesome5 name="rocketchat" size={46} color="rgb(221, 244, 244)" />
            </View>

            <Text style={styles.subText}>Chat Rooms</Text>
            <Text style={styles.subSubText}>See a list of chat rooms you can join with users that may have similar interests.</Text>

            <View style={styles.dividerLine}></View>

            <View style={styles.iconContainer}>
            <Entypo name="star" size={46} color="rgb(221, 244, 244)" />
            </View>

            <Text style={styles.subText}>Star Status</Text>
            <Text style={styles.subSubText}>Star Status is determined by your amount of followers. 100 followers = a red star. 1000 followers = a purple star. 5000 or more followers = a blue star.</Text>
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
