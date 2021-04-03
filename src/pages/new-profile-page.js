import React, { useEffect } from "react";
import { NewProfile } from "../components/new-profile";
import { LogoutButton } from "../components/logout-button";
import { LoginManager } from 'react-native-fbsdk'

const NewProfilePage = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Profile",
      headerRight: () => <LogoutButton />,
    });
  }, []);
  return <NewProfile />;
};

export default NewProfilePage;
