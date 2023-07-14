import React, { useReducer , useState,useEffect} from "react";
import {Container,Form,Row,Col,Button,Card} from 'react-bootstrap';
import axios from "axios";
import { Table } from "react-bootstrap";
import { useParams } from 'react-router-dom';

function MakeBill() {
  const { CID } = useParams();
  console.log(CID);
  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/showCustomer/'+CID)
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    // Simulating the data fetch
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/showProductName'); // Replace with your API endpoint
        const data = await response.json();
        const productNames = data.map((item) => item.Pname);
        setProduct(productNames);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(product);
  const [selectedProduct,setSelectedProduct]=useState('');
  const [selectedProductMRP,setSelectedProductMRP]=useState('');

  function handleChange(d){
          setSelectedProduct(d);
          axios.get('http://localhost:5000/showProductName/'+{d})
          .then((res) => {
            console.log(res.data);
            setSelectedProductMRP(res.data.MRP);
          })
         .catch(err=>console.log(err));
    }

    console.log(selectedProduct);
    console.log('Hello');
    console.log(selectedProductMRP);

  const blinkingTextStyle = {
    color: 'red', 
    fontWeight: 'bold',
  };

  const cardStyles = {
    marginLeft: '500px',
    marginTop: '20px',
  };

    return(
      <Container>
      <div style={cardStyles}> 
      <Card style={{ width: '20rem'}}>
      {customer.map((result, i) => {
        return (
          <Card.Body>
             <Card.Title><h1>{result.CNAME}</h1></Card.Title>
          <Card.Text>
             <p>Address- {result.AREA}{result.TALUKA}</p>
             <p>Mobile No- {result.MOBILE}</p>
             <p>Email ID- {result.EMAIL}</p>
             <p>Aadhar No.- {result.AADHAR}</p>
             <p><span style={blinkingTextStyle}>Opening Balance - {result.OBALANCE}</span></p>
            <p>Birth Date-{result.BDate}</p>
          </Card.Text>
          </Card.Body>
        );
      })}
    </Card>
    </div>

    <div className="my-2" />
  <Form style={{ overflowX: 'hidden' }}>
  <Row>
        <Col xs={7}>
        {/* <Form.Select size="md" onChange={(e) =>setSelectedProduct(e.target.value)}> */}
        <Form.Select size="md" onChange={(e) =>handleChange(e.target.value)}>  
        <option value="">Select</option>
            {product.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>  ))}
    </Form.Select>
        </Col>
        <Col>
          <Form.Control placeholder="Quantity" />
        </Col>
        <Col>
          <Form.Control placeholder="MRP" value={selectedProductMRP}/>
        </Col>
      </Row>

</Form>

</Container>
) 
}
export default MakeBill;