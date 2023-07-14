import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function Display() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/showProduct")
      .then((res) => {
        // Access the student data from the 'recordsets' property
       // const studentData = res.data.recordsets[0];
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("This is new student obj", product);
  return (
    <Table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Manufacturer</th>
          <th>Product Type</th>
          <th>Quantity</th>
          <th>Quantity</th>
          <th>Batch</th>
          <th>Opening Stock</th>
          <th>Expiry Date</th>
          <th>Purchase Price with GST</th>
          <th>GST</th>
          <th>Purchase Price</th>
          <th>MRP</th>
          <th>Cash Price Retail</th>
          <th>Credit Price Retail</th>
          <th>Cash Price Wholesale</th>
          <th>Credit Price Wholesale</th>
        </tr>
      </thead>
      <tbody>
        {product.map((result, i) => {
          return (
            <tr key={i}>
              <td>{result.PID}</td>
              <td>{result.PNAME}</td>
              <td>{result.Manufacturer}</td>
              <td>{result.Ptype}</td>
              <td>{result.QProdN}</td>
              <td>{result.QProdQ}</td>
              <td>{result.Batch}</td>
              <td>{result.Ostock}</td>
              <td>{result.EDate}</td>
              <td>{result.PPriceGST}</td>
              <td>{result.GST}</td>
              <td>{result.PPrice}</td>
              <td>{result.MRP}</td>
              <td>{result.CashPR}</td>
              <td>{result.CreditPR}</td>
              <td>{result.CashPW}</td>
              <td>{result.CreditPW}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Display;
