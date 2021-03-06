import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from './styles/profile-style';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export function Profile() {
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
            <View>
                <Text style={styles.followersText}>108 Followers</Text>
                <Entypo name="star" size={24} color="red" />
                    <View style={styles.profileContainer}>
                        <Text style={styles.profileText}>Profile Name</Text>
                        <View style={styles.profileIcon}></View>
                    </View>
            </View>
            <View style={styles.container}>
        <View style={styles.containerInfo}>
        </View>

        <View style={styles.containerGallery}>
        <FlatList 
        numColumns={3}
        horizontal={false}
        data={''}
        renderItem={({item}) => (
            <View  
            style={styles.containerImage}>

            <Image
            style={styles.image}
            source={{uri: item.downloadURL}}
            />
            </View>
        )}
        />
        </View>
        </View>
        </View>
    );
}