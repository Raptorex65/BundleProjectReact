import React, { useState } from "react";
import { Form, Col, Row, Button, ProgressBar } from 'react-bootstrap';
import { storage } from "./firebase-config";

const ReactFirebaseFileUpload = () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  const handleUpload = () => {
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
            .ref("formimages")
            .child(image.name)
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
    <>
<Form>
  <Row className="mb-3">
      <Col xs="auto">
        <Form.Group  controlId="formFileMultiple" >
          <ProgressBar now={progress} max={100}/>
          <Form.Label></Form.Label>
          <Form.Control type="file" accept="image/x-png,image/jpeg" multiple 
          onChange={handleChange}/>
        </Form.Group>
      </Col>
  
    <Col xs="auto">
      <Form.Group controlId="formButton" >
        <Button  variant="info" onClick={handleUpload} images={images}>
            Upload Pictures
          </Button>
      </Form.Group>
    </Col>
  </Row>
</Form>
</>
)}



export default ReactFirebaseFileUpload 
