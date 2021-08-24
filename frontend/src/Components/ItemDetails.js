import React, {useState} from 'react';
import {Card, Form, Button, Container} from 'react-bootstrap';
import axios from "axios";



export default function ItemDetails() {  

    const [supItemId, setsupItemId] = useState("");
    const [supName, setName] = useState("");
    const [itemName, setitemName] = useState("");
    const [purchasedDate, setpurchasedDate] = useState("");
    const [quantity, setquantity] = useState("");
    const [unitprice, setunitprice] = useState("");

    function sendData(e){
        e.preventDefault();
        

        const newItem = {
            supItemId,
            supName ,
            itemName ,
            purchasedDate ,
            quantity ,
            unitprice 
        }

       

        axios.post("http://localhost:8070/item/add", newItem).then(()=>{
            alert("Successfully Added")
        }).catch((err)=>{
            alert(err)
        })
        
    }


// render() {
    return(
        <Container style={{marginTop:40}}>
        <Card className = {"col-md-6 offset-md-3 offset-md-3"} style = {{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
            <Card.Header style={{background: "#072344", color: "white"}}><center>Add New Supplied Item Details</center></Card.Header>
                <Card.Body>
                    <Form onSubmit={sendData}>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>Supplied Item ID</Form.Label>
                            <Form.Control type="text" placeholder="SI####" id="supItemId" pattern="[S][I][0-9][0-9][0-9][0-9]" required
                            onChange={(e)=>{

                                setsupItemId(e.target.value);

                            }} />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicname">
                            <Form.Label>Supplier Name</Form.Label>
                            <Form.Control type="text" placeholder="Supplier Name" id="supName" required
                            onChange={(e)=>{

                                setName(e.target.value);

                            }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicemail">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control type="text" placeholder="Item" id="itemName" required
                            onChange={(e)=>{

                                setitemName(e.target.value);

                            }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicnic">
                            <Form.Label>Purchased Date</Form.Label>
                            <Form.Control type="date" placeholder="Date" id="purchasedDate" required
                            onChange={(e)=>{

                                setpurchasedDate(e.target.value);

                            }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicno">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="qty" placeholder="Quantity" id="quantity" required
                            onChange={(e)=>{

                                setquantity(e.target.value);

                            }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicno">
                            <Form.Label>Unit Price (Rs.)</Form.Label>
                            <Form.Control type="price" placeholder="Unit Price" id="unitprice" required
                            onChange={(e)=>{

                                setunitprice(e.target.value);

                            }}/>
                        </Form.Group>

                        


                        
                        <Button variant="primary" type="submit" style={{marginLeft:250, background: "#24547c"}}>
                            Submit
                        </Button>
                        
                    </Form>
                </Card.Body>
        </Card>
        </Container>
    )

//}
}