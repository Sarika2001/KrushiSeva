import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
//import Student from './Student';
import Display from "./Display";
import AddProduct from "./AddProduct";
import AddCustomer from "./AddCustomer";
import ViewCustomer from "./ViewCustomer";
import MakeBill from "./MakeBill";

function App() {
  return(
    <div className="App">
    <BrowserRouter> 
     <Routes>  
     <Route path='/addproduct' element= {<AddProduct/>}/>  
     <Route path='/viewproduct' element= {<Display/>}/> 
     <Route path='/addcustomer' element= {<AddCustomer/>}/>
     <Route path='/viewcustomer' element= {<ViewCustomer/>}/>  
     <Route path='/makebill/:CID' element= {<MakeBill/>}/>  
   
      </Routes>  
    </BrowserRouter> 
    </div>   
  );
  
}

export default App