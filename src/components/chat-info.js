import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles/chat-info-style';


export function ChatInfo() {
    return (
       <View>
           <Text style={styles.mainText}>Room Name:</Text>
           <Text style={styles.subText}>90s Room</Text>
           <View style={styles.Spacer}>

           </View>
           <Text style={styles.mainText}>Number of users in room:</Text>
           <Text style={styles.subText}>50</Text>
       </View>
    );
}