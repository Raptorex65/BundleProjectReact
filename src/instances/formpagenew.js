import React, { useState, useEffect } from "react";
import { Form, Col, Row, Container, Button, ProgressBar } from 'react-bootstrap';
import { storage } from "../forms/firebase-config";
import FormFinal from '../forms/form-data'   
import ItemImages from "../forms/item-images";

export default function Forms() {
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((images) => [...images, newImage]);

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
              setImageUrls((imageUrls) => [...imageUrls, urls]);

            });
        }
      );
    });

    Promise.all(promises)
      .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
  };


    useEffect(()=> {
        localStorage.setItem('urls', JSON.stringify(imageUrls))
        // for saving item = setItem
    }, [imageUrls])

 useEffect(() => {
   const imagesData = JSON.parse(localStorage.getItem("urls"));

   // for retrieving item = getItem
   if (imagesData) {
     setImages(imagesData);
                         console.log(imagesData);

   }
 }, []);

                      console.log(imageUrls);
                      console.log(images);



    return (
      <Container className="form-container">
        <Row>
          <Col>
            <FormFinal />
          </Col>

          <Col>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId="formFileMultiple">
                    <Form.Label>INSERT IMAGES TO UPLOAD</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/x-png,image/jpeg"
                      multiple
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <ProgressBar now={progress} max={100} />
                </Col>
                <Col>
                  <Form.Group controlId="formFileMultiple">
                    <Button variant="info" onClick={handleUpload}>
                      Upload Pictures
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>

            <ItemImages images={images} imageUrls={imageUrls} />
          </Col>
        </Row>
      </Container>
    );
}

