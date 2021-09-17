import React, { useState, useContext } from "react";
import { storage } from "../forms/firebase-config";
import firebase from "firebase/app";
import "firebase/storage";

const ImagesContext = React.createContext();

export const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const [allImages, setAllImages] = useState([]);

  const HandleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const HandleUpload = () => {
    const promises = [];
    images.map((image) => {
      const uploadTask = storage.ref(`formimages/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("formimages/")
            .child()
            .getDownloadURL()
            .then((urls) => {
              setUrls((prevState) => [...prevState, urls]);
            });
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
  };
  return (
    <ImagesContext.Provider
      value={{
        HandleChange,
        HandleUpload,
        progress,
        images,
        urls,
        allImages,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
};

export const useImagesContext = () => {
  return useContext(ImagesContext);
};

