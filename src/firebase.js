import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCZzqKM1nUidLGlE5hTPGNXsNHj_AEadoQ",
    authDomain: "chatbox-be2df.firebaseapp.com",
    projectId: "chatbox-be2df",
    storageBucket: "chatbox-be2df.appspot.com",
    messagingSenderId: "775789041876",
    appId: "1:775789041876:web:8d622ddb5680e3334a0341"
  }).auth();