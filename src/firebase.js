import  firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAiNIxSaQfsiBe4lMDnyCDU4AVH-10q-Gk",
    authDomain: "music-piano-8f110.firebaseapp.com",
    projectId: "music-piano-8f110",
    storageBucket: "music-piano-8f110.appspot.com",
    messagingSenderId: "755894011082",
    appId: "1:755894011082:web:1f15b9955c35362d0b6033",
    measurementId: "G-B0LFPSNXQ9"
  };


  


  export default firebase.initializeApp(firebaseConfig);