import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/pages/login-page';
import SplashPage from './src/pages/splash-page';
import ProfilePage from './src/pages/profile-page';
import OnboardingOnePage from './src/pages/onboarding-one-page';
import OnboardingTwoPage from './src/pages/onboarding-two-page';
import OnboardingThreePage from './src/pages/onboarding-three-page';
import OnboardingFourPage from './src/pages/onboarding-four-page';
import NewProfilePage from './src/pages/new-profile-page';
import UploadPageTwo from './src/pages/upload-two-page';
import UploadPage from './src/pages/upload-page';
import HomePage from './src/pages/home-page';
import * as firebase from 'firebase';

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAUHDF0aHE2qDTDoJt16bI_zPfoOwULjFQ",
  authDomain: "love-star-2f0f0.firebaseapp.com",
  projectId: "love-star-2f0f0",
  storageBucket: "love-star-2f0f0.appspot.com",
  messagingSenderId: "653609273478",
  appId: "1:653609273478:web:530695b28e2a444e5da907",
  measurementId: "G-RHDCN6KBSF"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Login'
      screenOptions={{
        title: "Love Star",
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: 'rgb(221, 244, 244)',
      }
      }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Splash" component={SplashPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="OnboardingOne" component={OnboardingOnePage} options={{headerLeft: null}}/>
        <Stack.Screen name="OnboardingTwo" component={OnboardingTwoPage} options={{headerLeft: null}}/>
        <Stack.Screen name="OnboardingThree" component={OnboardingThreePage} />
        <Stack.Screen name="OnboardingFour" component={OnboardingFourPage} />
        <Stack.Screen name="NewProfile" component={NewProfilePage} />
        <Stack.Screen name="Upload" component={UploadPage} />
        <Stack.Screen name="UploadTwo" component={UploadPageTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
