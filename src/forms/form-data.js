import { Form, Col, Row, Button } from 'react-bootstrap';
import React, {useState, UseEffect} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import firebase from "firebase/app"
import database from './firebase-config';
import uuid from 'uuid'
import "firebase/database";

const schema = yup.object().shape({
  itemName: yup.string().required(),
  category: yup.number().required(),
  description: yup.string().required(),
  address: yup.string().required(),
  canton: yup.number().required(),
  city: yup.string().required(),
  postal_code: yup.number().required(), 
  phone: yup.number().required(),
  email: yup.string().required('Email is required').email('Email is invalid'),
});

const FormFinal = () => {
const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
})

const onSubmit = (data) => { 
//YUP validation check
  yup.object().validate(data)
        .then(function(value) {
    console.log(value); // returns form data object
  })
  .catch(function(err) {
    console.log(err);
  });

// Posting data to Firebase DB
  writeUserData(data)
// Posting data to Mysql DB
   fetch('http://localhost:3000/donationform', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
      console.log('Donation Form Data Posted')
    })
}

function writeUserData(data) {
    const userId = uuid();
    const {itemName, category, description, address, canton, city, postal_code, email, phone}= data

  firebase.database().ref('users/' + userId).set({
    id:userId,
    name: itemName,
    category: category,
    desc: description,
    address: address,
    canton: canton,
    city: city,
    postal_code: postal_code,
    email: email,
    phone: phone
  }).then(()=> {
    console.log("Kayit Eklendi")
  })
  .catch((e)=> {
    console.log("Error Kayit Eklenemedi!!!")
  })
}

  return (
    <>
<Form onSubmit={handleSubmit(onSubmit)} >
  <Row>
    <Col>    
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Item Name</Form.Label>
     <Form.Control type="text" {...register("itemName", { required: true, maxLength: 20 })}/>
    </Form.Group>
  </Col>
  <Col>
  <Form.Group as={Col} controlId="formCategory">
    <form>
        <label> Category</label>
          <div className='form-control'>
            <select {...register("category")}>
              <option value="0">Choose a category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
      </form>
      </Form.Group>
    </Col>
  </Row>

   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={3} {...register("description")}/>
  </Form.Group>

<Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" {...register("address")}/>
  </Form.Group>

<Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
       <form>
        <label> Canton</label>
          <div className='form-control'>
            <select {...register("canton")}>
              <option value="">Choose...</option>
              <option value="0">Ticino</option>
              <option value="1">Zug</option>
              <option value="2">Argau</option>
              <option value="3">Zurich</option>
            </select>
          </div>
      </form>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <form>
        <label> City</label>
          <div className='form-control'>
            <select {...register("city")}>
              <option value="" >Choose...</option>
              <option value="0">Lugano</option>
              <option value="1">Mendrisio</option>
              <option value="2">Locarno</option>
              <option value="3">Chiasso</option>
            </select>
          </div>
      </form>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Postal Code</Form.Label>
      <Form.Control type="number" {...register("postal_code")}/>
    </Form.Group>
  </Row>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"  {...register("email")}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="phone" {...register("phone")}/>
    </Form.Group>
  </Row>
  
  <Form.Group controlId="formButton" >
<Button variant="info" type="submit">
    Submit
  </Button>
      </Form.Group>

    <br></br>
</Form>
</>
  );
};

export default FormFinal 


