import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/new-profile-style";
import { useNavigation } from "@react-navigation/native";

export function NewProfile() {
  const navigation = useNavigation();
  // const { user } = useContext(AppleAuthentication, Facebook)
  // const [photo, setPhoto] = useState(null);
  // const getProfilePicture = async (currentUser) => {
  //   const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
  //   setPhoto(photoUri);
  // }
  // useEffect(() => {
  //   getProfilePicture(user);
  // }, [user]);
  return (
    <View style={styles.backgroundProfile}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Profile Name</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CameraUpload")}>
          {<View style={styles.profileIcon}></View>}
        </TouchableOpacity>
      </View>
    </View>
  );
}
