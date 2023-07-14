import React, { useReducer , useState} from "react";
import {Form,Row,Col,Button,Card} from 'react-bootstrap';
import axios from "axios";
import CFormReducer from "./CFormReducer";

const initialFormState={
  Cname: '',
  Area: '',
  Taluka: '',
  Mobile: '',
  Email: '',
  Aadhar: '',
  OBalance: '',
  BDate: '',
 }

function AddCustomer() {
const [formState,dispatch]=useReducer(CFormReducer,initialFormState);

  const handleTextChange=(event)=>{
    dispatch({
      type:"HANDLE TEXT INPUT",
      field:event.target.name,
      payload:event.target.value,
    })
  };
  const handleDateChange=(event)=>{
  dispatch({ type: "SELECT_DATE", payload: event.target.value});
  };
  function handleSubmit(event){
    event.preventDefault();
    console.log({formState});

    const mobilePattern = /^[0-9]{10}$/; // Regex pattern for 10-digit mobile number
    if (!mobilePattern.test(formState.Mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const emailPattern =  /\S+@\S+\.\S+/;
    if (!emailPattern.test(formState.Email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    const aadharPattern = /^[0-9]{12}$/; // Regex pattern for 10-digit mobile number
    if (!aadharPattern.test(formState.Aadhar)) {
      alert("Aadhar Number should be 12 digit long");
      return;
    }

   axios.post('http://localhost:5000/showCustomer',{...formState})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    console.log({formState});

   
  };

  const cardStyles = {
    marginLeft: '360px',
    marginTop: '20px',
    marginBottom: '20px'
  };

  const cardheadertextcolor = {
    color: 'white',
    backgroundColor: '#19891B' 
   };
   
  const cardbodycolor = {
    backgroundColor: '#E3F2E4' 
   };

    return(
      <div style={cardStyles}>
      <Card style={{ width: '60rem' }}>

      <Card.Header style={cardheadertextcolor}>Add New Customer</Card.Header>
      <Card.Body style={cardbodycolor}>
        <Form style={{ overflowX: 'hidden' }}>
        <div className="my-4" />
        <Form.Group as={Row} className="align-items-center">
          <Form.Label column sm="3">Customer Name: </Form.Label>
          <Col sm="4"  >
          <Form.Control type="text" placeholder="Enter Customer Name" value={formState.Cname} onChange={(e)=>handleTextChange(e)} name="Cname" />
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Area: </Form.Label>
          <Col sm="4">
          <Form.Control type="text" placeholder="Enter Village Name" value={formState.Area} onChange={(e)=>handleTextChange(e)} name="Area" />
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Taluka: </Form.Label>
          <Col sm="4">
          <Form.Control type="text" placeholder="Enter Taluka Name" value={formState.Taluka} onChange={(e)=>handleTextChange(e)} name="Taluka" />
          </Col>
        </Form.Group>

         <div className="my-2" />
        <Form.Group as={Row}>
        <Form.Label column sm="3">State: </Form.Label>
        </Form.Group>  

        
        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Mobile No: </Form.Label>
          <Col sm="4">
          <Form.Control type="tel" placeholder="Enter Mobile No" value={formState.Mobile} onChange={(e)=>handleTextChange(e)} name="Mobile"/>
          </Col>
        </Form.Group>
    
        
        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Email ID: </Form.Label>
          <Col sm="4">
          <Form.Control type="email" placeholder="Enter Email ID" value={formState.Email} onChange={(e)=>handleTextChange(e)} name="Email"/>
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Aadhar No: </Form.Label>
          <Col sm="4">
          <Form.Control type="number" value={formState.Aadhar} onChange={(e)=>handleTextChange(e)} name="Aadhar" />
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Opening Balance: </Form.Label>
          <Col sm="4">
          <Form.Control type="number" value={formState.OBalance} onChange={(e)=>handleTextChange(e)} name="OBalance"/>
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Birth Date </Form.Label>
          <Col sm="4">
          <Form.Control type="date"  value={formState.BDate} onChange={handleDateChange} name="BDate"/>
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Button type="submit" style={cardheadertextcolor} onClick={(e)=>handleSubmit(e)}>Add Customer</Button>
      </Form>
      </Card.Body>
      </Card>
      </div>
    ) 
}

export default AddCustomer;