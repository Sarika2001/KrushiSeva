import React, { useState, useEffect } from "react";
import axios from "axios";
import {Button} from 'react-bootstrap';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import {BrowserRouter,Routes,Route } from 'react-router-dom';

import MakeBill from "./MakeBill";

function ViewCustomer() {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/showCustomer")
      .then((res) => {
        // Access the student data from the 'recordsets' property
       // const studentData = res.data.recordsets[0];
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDelete(CID){
    alert('Deleted')
    try
    {
      axios.delete("http://localhost:5000/showCustomer/"+CID)
      console.log('Deleted Success');
      window.location.reload(true);
    }
    catch(err) 
    {
      console.log(err);
    }
  }

  const handleBill = (CID) => {
    
  };

console.log("This is new student obj", customer);
  return (
    <Table>
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>Customer Name</th>
          <th>Area</th>
          <th>Taluka</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Aadhar No</th>
          <th>Opening Balance</th>
          <th>Birth Date</th>
        </tr>
      </thead>
      <tbody>
        {customer.map((result, i) => {
          return (
            <tr key={i}>
              <td>{result.CID}</td>
              <td>{result.CNAME}</td>
              <td>{result.AREA}</td>
              <td>{result.TALUKA}</td>
              <td>{result.MOBILE}</td>
              <td>{result.EMAIL}</td>
              <td>{result.AADHAR}</td>
              <td>{result.OBALANCE}</td>
              <td>{result.BDate}</td>
              <td><Button type="submit">Update</Button></td>
              <td><Button type="submit" onClick={() =>handleDelete(result.CID)}>Delete</Button></td>
              <td>
              <Link to={`/makebill/${result.CID}`}>
                <Button type="submit">Make Bill</Button>
              </Link>
            </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default ViewCustomer;

