import { Form, Col, Row, Button } from 'react-bootstrap';
import React from 'react';
import "firebase/firestore";
import storage from './dbconfig'

const UploadToFirebase = () => {
var storageRef = storage.ref("folderName/file.jpg");
let firstFile = e.target.file[0];

var uploadTask = storageRef.put(firstFile).then((snapshot) => {
  console.log('Uploaded a blob or file!');
      })

 // Upload completed successfully, now we can get the download URL
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
    });


return (
    <>
<Form>
  <Form.Group controlId="formFileMultiple" className="mb-3">
    <Form.Label>Pictures of the item</Form.Label>
    <Form.Control type="file" accept="image/x-png,image/jpeg"  
    />
    <Button variant="primary" onClick={(e)=>UploadToFirebase(e)}>
      Upload Picture
    </Button>
  </Form.Group>
</Form>
</>
)
}

export default UploadToFirebase


