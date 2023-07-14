import React, { useEffect, useState } from "react";
import {Form,Row,Col, InputGroup,FormControl,Button,Container,Card,Table} from 'react-bootstrap';
import axios from "axios";

function Student() {
  const[name,setName]=useState('');
  const[age,setAge]=useState('');
 
  function handleSubmit(event){
   axios.post('http://localhost:5000/create',{name,age})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  };

  const cardStyles = {
    marginLeft: '360px', // Adjust the margin value as per your requirement
    marginTop: '20px',
    marginBottom: '20px'
  };

  const cardheadertextcolor = {
    color: 'white',
    backgroundColor: '#19891B' // Adjust the margin value as per your requirement
   };
   
  const cardbodycolor = {
    backgroundColor: '#E3F2E4' // Adjust the margin value as per your requirement
   };

    return(
      <div style={cardStyles}>
      <Card style={{ width: '60rem' }}>

      <Card.Header style={cardheadertextcolor}>Add New Product</Card.Header>

      <Card.Body style={cardbodycolor}>
        <Form style={{ overflowX: 'hidden' }} onSubmit={handleSubmit}>
        <div className="my-4" />
        <Form.Group as={Row} className="align-items-center">
          <Form.Label column sm="3">Name: </Form.Label>
          <Col sm="4"  >
          <Form.Control type="text" placeholder="Enter Product Name" value={name} 
          onChange={(event)=>{setName(event.target.value);}} />
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Age: </Form.Label>
          <Col sm="4">
          <Form.Control type="number" placeholder="Enter Age Name" value={age} 
           onChange={(event)=>{setAge(event.target.value);}} />
          </Col>
        </Form.Group>
       <div className="my-2" />
        <Button type="submit" style={cardheadertextcolor}>Add Product</Button>
      </Form>
      </Card.Body>
      </Card>
      </div>
    ) 
}

export default Student;