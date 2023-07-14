import React, { useReducer } from "react";
import {Form,Row,Col,Button,Card,InputGroup} from 'react-bootstrap';
import axios from "axios";
import PFormReducer from "./PFormReducer";

const initialFormState={
  Pname: '',
  Manufacturer: '',
  Ptype: '',
  QProdN: '',
  QProdQ: '',
  Batch: '',
  OStock: '',
  EDate: '',
  PPriceGST: '',
  GST: '',
  PPrice: '',
  MRP: '',
  CashPR: '',
  CreditPR: '',
  CashPW: '',
  CreditPW: ''
 }

function AddProduct() {
const [formState,dispatch]=useReducer(PFormReducer,initialFormState);

  const handleTextChange=(event)=>{
    dispatch({
      type:"HANDLE TEXT INPUT",
      field:event.target.name,
      payload:event.target.value,
    })
  };

  const handleOptionChange=(event)=>{
    dispatch({ 
      type: 'SELECT_OPTION',
      field:event.target.name, 
      payload: event.target.value });
  };

  const handleDateChange=(event)=>{
    dispatch({ 
      type: 'SELECT_DATE',
      payload: event.target.value });
  };

  function handleSubmit(event){
    event.preventDefault();
    console.log({formState});

   axios.post('http://localhost:5000/showProduct',{...formState})
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

      <Card.Header style={cardheadertextcolor}>Add New Product</Card.Header>
      <Card.Body style={cardbodycolor}>
        <Form style={{ overflowX: 'hidden' }}>
        <div className="my-4" />
        <Form.Group as={Row} className="align-items-center">
          <Form.Label column sm="3">Product Name: </Form.Label>
          <Col sm="4"  >
          <Form.Control type="text" placeholder="Enter Product Name" value={formState.Pname} onChange={(e)=>handleTextChange(e)} name="Pname" />
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Manufacturer: </Form.Label>
          <Col sm="4">
          <Form.Control type="text" placeholder="Enter Manufacturer Name" value={formState.Manufacturer} onChange={(e)=>handleTextChange(e)} name="Manufacturer" />
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
        <Form.Label column sm="3">Type of Product: </Form.Label>
        <Col sm="4">
        <Form.Select size="md" value={formState.Ptype} onChange={handleOptionChange} name="Ptype">
            <option value=''>Select</option>
            <option value='Pesticides'>Pesticides </option>
            <option value='Fertilizers'>Fertilizers </option>
            <option value='Seeds'>Seeds </option>
        </Form.Select>
        </Col>
        </Form.Group>

         <div className="my-2" />
        <Form.Group as={Row}>
        <Form.Label column sm="3">Quantity of Product: </Form.Label>
        <Col sm="9">
        <InputGroup>
        <Col sm="2">
        <Form.Control type="text"  value={formState.QProdN} onChange={(e)=>handleTextChange(e)} name="QProdN"/>
        </Col>
        <Col sm="3">
        <Form.Select value={formState.QProdQ} onChange={handleOptionChange} name="QProdQ">
            <option value=''>Select Option </option>
            <option value='KG'>KG </option>
            <option value='GM'>GM </option>
            <option value='LTR'>LTR </option>
            <option value='ML'>ML </option>
        </Form.Select>
        </Col>
        </InputGroup>
        </Col>
        </Form.Group>  

        
        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Batch No: </Form.Label>
          <Col sm="4">
          <Form.Control type="text" placeholder="Enter Batch No" value={formState.Batch} onChange={(e)=>handleTextChange(e)} name="Batch"/>
          </Col>
        </Form.Group>
        
        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Opening Stock: </Form.Label>
          <Col sm="4">
          <Form.Control type="text" placeholder="Enter Opening Stock" value={formState.OStock} onChange={(e)=>handleTextChange(e)} name="OStock"/>
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Expiry Date: </Form.Label>
          <Col sm="4">
          <Form.Control type="date" value={formState.EDate} onChange={(e)=>handleDateChange(e)} />
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Purchase Price[with GST]: </Form.Label>
          <Col sm="4">
          <Form.Control type="text" value={formState.PPriceGST} onChange={(e)=>handleTextChange(e)} name="PPriceGST"/>
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">GST: </Form.Label>
          <Col sm="4">
          <Form.Control type="text"  value={formState.GST} onChange={(e)=>handleTextChange(e)} name="GST"/>
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Purchase Price: </Form.Label>
          <Col sm="4">
          <Form.Control type="text"  value={formState.PPrice} onChange={(e)=>handleTextChange(e)} name="PPrice" />
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">MRP: </Form.Label>
          <Col sm="4">
          <Form.Control type="text"  value={formState.MRP} onChange={(e)=>handleTextChange(e)} name="MRP"/>
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Cash Price Retail: </Form.Label>
          <Col sm="4">
          <Form.Control type="text"  value={formState.CashPR} onChange={(e)=>handleTextChange(e)} name="CashPR"/>
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Credit Price Retail: </Form.Label>
          <Col sm="4">
          <Form.Control type="text"  value={formState.CreditPR} onChange={(e)=>handleTextChange(e)} name="CreditPR"/>
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Cash Price Wholesale: </Form.Label>
          <Col sm="4">
          <Form.Control type="text"  value={formState.CashPW} onChange={(e)=>handleTextChange(e)} name="CashPW"/>
          </Col>
        </Form.Group>

        <div className="my-2" />
        <Form.Group as={Row}>
          <Form.Label column sm="3">Credit Price Wholesale: </Form.Label>
          <Col sm="4">
          <Form.Control type="text"  value={formState.CreditPW} onChange={(e)=>handleTextChange(e)} name="CreditPW"/>
          </Col>
        </Form.Group>
        <div className="my-2" />
        <Button type="submit"  style={cardheadertextcolor} onClick={(e)=>handleSubmit(e)}>Add Product</Button>
      </Form>
      </Card.Body>
      </Card>
      </div>
    ) 
}

export default AddProduct;