import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles/splash-style';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function Splash() {
    return (
        <View style={styles.backgroundSplash}>
            <View>
                <Image source={require('../img/elephantImage.png')} style={styles.elephantImage} />
                <Text style={styles.titleText}>Love Star</Text>
                <Text style={styles.subtitleText}>Explore the world by creating beautiful posts and chatting with others.</Text>
                <View>
                <Entypo name="star" style={styles.starIcon}/>
                <AntDesign name="heart" style={styles.heartIcon}/>
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.buttonContainer}>
                <Text style={styles.buttonContainerText}>Get Started</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
}