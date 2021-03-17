import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from './styles/new-profile-style';


export function NewProfile() {
return (
  <View style={styles.backgroundProfile}>

      <View style={styles.profileContainer}>
          <Text style={styles.profileText}>Profile Name</Text>
          <TouchableOpacity>
          <View style={styles.profileIcon}></View>
          </TouchableOpacity>
      </View>
  </View>

);
}