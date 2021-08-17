import firebase from "firebase/app"
import 'firebase/storage'
import 'firebase/database'

 const firebaseConfig = {
    apiKey: "AIzaSyA0d6jqo9Xx0KrRQbuDPthjKUpEqX2A2Rw",
    authDomain: "bundle-f7de0.firebaseapp.com",
    projectId: "bundle-f7de0",
    databaseURL: "https://bundle-f7de0-default-rtdb.europe-west1.firebasedatabase.app",
    storageBucket: "bundle-f7de0.appspot.com",
    messagingSenderId: "440989234344",
    appId: "1:440989234344:web:04aaba715b6892a20afe9d",
    measurementId: "G-S20SHBGVKD"
  };
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage(); 
const database = firebase.database();
export default {storage, database}