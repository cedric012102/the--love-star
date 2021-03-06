import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/chat-room-style';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function ChatRoom() {
    return (
       <View style={styles.backgroundChat}>
           <View style={styles.headerContainer}>
           <TouchableOpacity>
           <MaterialCommunityIcons name="information-outline" size={24} color="black" />
           </TouchableOpacity>
           <Text style={styles.headerText}>90s Era</Text>
           </View>
        <View style={styles.profileIcon}>

        </View>
        <View style={styles.chatContainer}>
            <Text>My Name is Cedric! Nice to meet everyone!</Text>
        </View>
        <View style={styles.messageContainer}>
            <Text style={styles.messageContainerText}>Message</Text>
            <Entypo name="paper-plane" size={24} color="black" />
        </View>
        
         
       </View>
    );
}