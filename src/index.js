import * as firebase from 'firebase';

// const FirebaseConfig = {
//     apiKey: 'AIzaSyAscv1_vnkHqn9mnxqyuJ-Qj3w7gLGCjM0',
//     authDomain: 'love-star-4ebca.firebaseapp.com',
//     // databaseURL: 'https://project-id.firebaseio.com',
//     projectId: 'love-star-4ebca',
//     // storageBucket: 'project-id.appspot.com',
//     // messagingSenderId: 'sender-id',
//     // appId: '1:156884841393:ios:c6a50e79801d92283ac390',
//     // measurementId: 'G-measurement-id',
//   };

const FirebaseConfig = {
  apiKey: "AIzaSyAscv1_vnkHqn9mnxqyuJ-Qj3w7gLGCjM0",
  authDomain: "love-star-4ebca.firebaseapp.com",
  projectId: "love-star-4ebca",
  storageBucket: "love-star-4ebca.appspot.com",
  messagingSenderId: "156884841393",
  appId: "1:156884841393:web:78367e910143644f3ac390",
  measurementId: "G-ML2E36J0LN"
};
  
  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }