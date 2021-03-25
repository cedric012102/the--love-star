import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, ActionSheetIOS } from "react-native";
import { styles } from "./styles/new-profile-style";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";
import { Camera } from "expo-camera";
import * as firebase from 'firebase';

export function NewProfile() {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);

  return (
    <View style={styles.backgroundProfile}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Profile Name</Text>
        <TouchableOpacity onPress={onShowActionSheet}>
          <Image source={photo} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      <Camera
        ref={cameraRef}
        style={styles.fixedRatio}
        type={Camera.Constants.Type.back}
        ratio={"1:1"}
      />
    </View>
  );

  function onShowActionSheet(){
    if(Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Open Library', 'Take Photo'],
          cancelButtonIndex: 0,
        },
        buttonIndex => {
          if (buttonIndex === 1) {
            pickImage();
          } else if (buttonIndex === 2) {
            takePicture();
          }
        }
      );
    }   
  }

  async function takePicture() {
    if (cameraRef.current) {
      const result = await cameraRef.current.takePictureAsync(null);
      onUploadImage(result)
    }
  }

  async function pickImage(){
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      onUploadImage(result);
    }
  }

  function onUploadImage(result){
      //  Upload image to Firebase
      firebase
        .storage()
        .ref("profile-pic")
        .putFile(result.uri)
        .then(() => {
          console.log(`Has been successfully uploaded.`);
        })
        .catch((e) => console.log('uploading image error => ', e));
      setPhoto(result);
  }
}
