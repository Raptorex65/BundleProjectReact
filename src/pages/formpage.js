import React from "react";
import FormRules from '../forms/formrules'
import './formpage.css'
//import Formnew from '../forms/formnew'
//import ValidForm from '../forms/works/form-jason'
import FormFinal from '../forms/form-data'   
import { Col, Row, Container } from 'react-bootstrap';
import UploadPictures from '../forms/form-images'
//import UploadFiles from '../forms/formfile'
export default function Forms() {
 
  return (
    <Container className='form-container'>
      <Row >
        <Col>
           <FormFinal/>
            <UploadPictures/>
        </Col>
        <Col>
            <FormRules/>
        </Col>
      </Row>
    </Container>



  );
}




