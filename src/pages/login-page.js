import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, SafeAreaView, Image, ScrollView } from 'react-native';
import styles from './styles/login-page-style';
import { ChatList } from '../components/chat-list';

const LoginPage = () => {
    // const backgroundImage = require('../img/test.jpg');
    // const elephantImage = require('../img/elephant-background.png');
    return (
        <ScrollView>
        <ChatList/>
        </ScrollView>
        // <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        //     <SafeAreaView style={styles.containerStyle}>
        //             <View style={styles.titleContainer}>
        //                 <Text style={styles.title}>Love Star</Text>
        //                 <Image source={elephantImage} style={styles.elephantImage} />
        //             </View>
        //             <View style={styles.buttonAreaContainer}>
        //     <TouchableOpacity style={styles.buttonContainer}>
        //         <Text style={styles.buttonText}>Continue with Google</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.buttonContainer}>
        //         <Text style={styles.buttonText}>Continue with Apple</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity style={styles.buttonContainer}>
        //         <Text style={styles.buttonText}>Continue with Facebook</Text>
        //     </TouchableOpacity>
        //     </View>
        //     </SafeAreaView>
        // </ImageBackground>
    );
};

export default LoginPage;