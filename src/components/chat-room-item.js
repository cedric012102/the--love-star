import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import {styles} from './styles/chat-room-item-style.js'
import { MaterialIcons } from '@expo/vector-icons';
  
const ChatRoomItem = ({ label }) => {
  return (
    <View>
      <View style={styles.chatSelectionContainer}>
      <Image source={require('../img/90s.jpg')} style={styles.chatImage} />
          <Text style={styles.chatSelectionText}>{label}</Text>
      <TouchableOpacity>
          <View style={styles.chatSelectionBar}>
          <Text style={styles.chatSelectionBarText}>Join Room</Text>
          <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
          </View>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChatRoomItem;

