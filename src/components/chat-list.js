import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles/chat-list-style';
import { FontAwesome } from '@expo/vector-icons';

export function ChatList() {
    return (
        <View style={styles.backgroundChat}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Open Chat Rooms</Text>
                <FontAwesome name="hand-o-down" size={24} color="black" />
            </View>
            <View style={styles.enterChatContainer}>
                <Text style={styles.enterChatText}>Enter Chat Room</Text>
            </View>
            <View style={styles.chatSelectionContainer}>
                    <Text style={styles.chatSelectionText}>90s Era</Text>
            </View>
            <View style={styles.chatSelectionContainer}>
                    <Text style={styles.chatSelectionText}>Vegans Rock</Text>
            </View>
            <View style={styles.chatSelectionContainer}>
                    <Text style={styles.chatSelectionText}>In my 20s</Text>
            </View>
            <View style={styles.chatSelectionContainer}>
                    <Text style={styles.chatSelectionText}>30 and Grown</Text>
            </View>
            <View style={styles.chatSelectionContainer}>
                    <Text style={styles.chatSelectionText}>50 and Up</Text>
            </View>
            <View style={styles.chatSelectionContainer}>
                    <Text style={styles.chatSelectionText}>Lets Talk Sports</Text>
            </View>
            <View style={styles.chatSelectionContainer}>
                    <Text style={styles.chatSelectionText}>Entrepreneurs</Text>
            </View>
            <View style={styles.chatSelectionContainer}>
                    <Text style={styles.chatSelectionText}>40s Club</Text>
            </View>
            <View style={styles.chatSelectionContainer}>
                    <Text style={styles.chatSelectionText}>Early 90s and 2000s sitcoms</Text>
            </View>
            <View style={styles.chatSelectionContainer}>
                    <Text style={styles.chatSelectionText}>Music Lovers</Text>
            </View>
        </View>
    );
}

