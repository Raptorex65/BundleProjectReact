import firebase from "firebase/app"
import "firebase/storage";
import React, { useState } from "react";
import { Form, Col, Row, Button } from 'react-bootstrap';
import storage from './dbconfig'

function UploadFiles() {
    const [image, setImage] = useState(null)

function selectImage() {  
// Created a Storage Reference with root dir
var storageRef = firebase.storage().ref('NewImages/');
// Get the file from DOM
var file = document.getElementById("files").files[0];
setImage(file)
console.log(file);
};

function clickHandler() {
if (image && storageRef) {
//dynamically set reference to the file name
var thisRef = storageRef.child(file.name);
//put request upload file to firebase storagethisRef.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
    //put request upload file to firebase storage
      thisRef.put(file).then(() => {
         alert("File Uploaded")
         console.log('Uploaded a blob or file!');
        });
    } else {
      alert("Please upload an image first.");
    }

}

return (
    <>
<input type="file" onChange={() => selectImage()} id="files" name="files[]" multiple />
<button onClick={clickHandler()}> Upload </button>
</>
)
}

export default UploadFiles 
