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

// Using allimages in the storage database is done by below function of ListAll
// I couldnt make it place in the images-context and will look it again in the future
let imagesArray = [];
function AllImages() {
      const storageRef = firebase.storage().ref();
      // Create a reference for folder 'formimages'
      var listRef = storageRef.child("formimages");
      // Find all the prefixes and items.
      listRef
        .listAll()
        .then((res) => {
          res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
          });
          res.items.forEach((itemRef) => {
            // All the items under listRef.
            itemRef.getDownloadURL().then((url) => {
              imagesArray.push(url);
              //console.log(imagesArray);
            });
          });
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
   }

    AllImages();

export { imagesArray, database, storage, firebase as default };
