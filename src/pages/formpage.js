import React, { useState, useEffect } from "react";
import {
  Form,
  Col,
  Row,
  Container,
  Button,
  ProgressBar,
} from "react-bootstrap";
import { storage } from "../forms/firebase-config";
import QuiltedImageList from "../forms/imagesnew2";
//import ItemImages from '../forms/item-images'
import {useImagesContext} from '../context/images-context'
import FormFinal from '../forms/form-data-new2'

export default function Forms() {
    const { HandleChange, HandleUpload, progress, images, urls } = useImagesContext();
  
  useEffect(() => {
    localStorage.setItem("localImages", JSON.stringify(images));
    localStorage.setItem("localUrls", JSON.stringify(urls));
    // for saving item = setItem
  }, [urls]);


  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <FormFinal />
        </Col>

        <Col md={6}>
          <div className="card m-1">
            <h5 className="card-header">Images</h5>
            <QuiltedImageList images={images} urls={urls} />
          </div>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formFileMultiple">
                <Form.Label>INSERT IMAGES TO UPLOAD</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/x-png,image/jpeg"
                  multiple
                  onChange={HandleChange}
                />
              </Form.Group>
              <ProgressBar now={progress} max={100} />
            </Col>
            <Col>
              <Form.Group controlId="formFileMultiple">
                <Button variant="info" onClick={HandleUpload}>
                  Upload Pictures
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
