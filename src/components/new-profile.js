import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from './styles/new-profile-style';
import { AntDesign } from '@expo/vector-icons';


export function NewProfile() {
return (
  <View style={styles.backgroundProfile}>
    <View style={styles.headerContainer}>
    <TouchableOpacity>
                <Text style={styles.chatLinkText}>Chat Rooms</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Profile</Text>
    </View>
      <View style={styles.profileContainer}>
          <Text style={styles.profileText}>Profile Name</Text>
          <View style={styles.profileIcon}></View>
      </View>
  </View>

);
}