import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles/chat-list-style';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import  ChatRoomItem  from './chat-room-item';

export function ChatList() {
    return (
        <View style={styles.backgroundChat}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Text>Home<Ionicons name="arrow-back" size={24} color="black" /></Text>
                </TouchableOpacity>
                    <Text style={styles.headerText}>Open Chat Rooms</Text>
            </View>

            <View style={styles.enterChatContainer}>
                <Text style={styles.enterChatText}>Enter a Chat Room</Text>
                <FontAwesome name="hand-o-down" size={24} color="rgb(210, 210, 210)" />
            </View>

            <ChatRoomItem label='90s Era'/>
            <ChatRoomItem label='Vegans Rock'/>
            <ChatRoomItem label='In my 20s'/>
            <ChatRoomItem label='30 and Grown'/>
            <ChatRoomItem label='40s club'/>
            <ChatRoomItem label='50 and Up'/>
            <ChatRoomItem label='Lets Talk Sports'/>
            <ChatRoomItem label='Entrepreneurs'/>
            <ChatRoomItem label='90s and 2000s sitcoms'/>
            <ChatRoomItem label='Music Lovers'/>
            
        </View>
    );
}



