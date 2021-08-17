import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button } from 'react-bootstrap';
import firebase from "firebase/app"
import storage from './firebase-config';
import uuid from 'uuid';

function UploadPictures(e) {
  console.log(e)
  let files = e.target.data;
  for (const file of files) {
    firebase
      .storage()
      .ref(`UserImages/+ ${uuid()}`)
      .child(file.name)
      .put(file)
  }



return (
    <>

<Form>
  <Row className="mb-3">
      <Col xs="auto">
  <Form.Group  controlId="formFileMultiple" >
    <Form.Label></Form.Label>
    <Form.Control type="file" accept="image/x-png,image/jpeg" multiple 
    onChange={(e)=> UploadPictures(e)}/>
  </Form.Group>
  </Col>
</Row>
</Form>

</>
)
}

export default UploadPictures 
