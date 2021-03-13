import { GoogleSignin } from "@react-native-community/google-signin";

export function registerGoogleSignin() {
  GoogleSignin.configure({
    scopes: ["https://www.googleapis.com/auth/userinfo.profile"],
    webClientId: "653609273478-5gno2khv4r2kofigep3obpr9a1oistaj.apps.googleusercontent.com", // your web client ID here (obtained from Firebase)
  });
}