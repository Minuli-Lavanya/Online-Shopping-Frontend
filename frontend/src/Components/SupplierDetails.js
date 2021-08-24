
import React, {useState} from 'react';
import {Card, Form, Button, Container} from 'react-bootstrap';
import axios from "axios";





export default function SupplierDetails() {  

    const [supplier_id, setSupid] = useState("");
    const [supplier_name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nic, setnic] = useState("");
    const [phone_number, setPhone] = useState("");
    const [gender, setgender] = useState("");

    function sendData(e){
        e.preventDefault();
        //alert("Successfully Added");

        const newSupplier = {
            supplier_id,
            supplier_name,
            email,
            nic,
            phone_number,
            gender
        }

        //console.log(newSupplier);

        axios.post("http://localhost:8070/supplier/add", newSupplier).then(()=>{
            alert("Successfully Added")
        }).catch((err)=>{
            alert(err)
        })

        
        
    }

    

    


// render() {
    return(
        <Container style={{marginTop:40}}>
        <Card className = {"col-md-6 offset-md-3 offset-md-3"} style = {{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
            <Card.Header style={{background: "#072344", color: "white"}}><center>Add New Supplier Details</center></Card.Header>
                <Card.Body>
                    <Form onSubmit={sendData}>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>Supplier ID</Form.Label>
                            <Form.Control type="text" placeholder="SID####" id="supplier_id" pattern="[S][I][D][0-9][0-9][0-9][0-9]" required
                            onChange={(e)=>{

                                setSupid(e.target.value);

                            }} />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicname">
                            <Form.Label>Supplier Name</Form.Label>
                            <Form.Control type="text" placeholder="Supplier Name" id="supplier_name" required
                            onChange={(e)=>{

                                setName(e.target.value);

                            }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicemail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" placeholder="Email" id="email" pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$" required
                            onChange={(e)=>{

                                setEmail(e.target.value);

                            }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicnic">
                            <Form.Label>NIC Number</Form.Label>
                            <Form.Control type="text" placeholder="NIC" id="nic" required
                            onChange={(e)=>{

                                setnic(e.target.value);

                            }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicno">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="phone" placeholder="Contact Number" id="phone_number" pattern="[0-9]{10}" required maxLength="10"
                            onChange={(e)=>{

                                setPhone(e.target.value);

                            }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicno">
                            <Form.Label>Gender</Form.Label>
                            <select className="form-control" id="gender" required 
                            onChange = {(e) => {
                            setgender(e.target.value);
                                }}>
                                <option>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                
                            </select>

                        </Form.Group>



                        <Button variant="primary" type="submit" style={{marginLeft:220, background: "#24547c"}}>Submit</Button>
                        <Button variant="primary" style={{marginLeft:30, background: "#5494a4",color:"white"}} onReset> Reset</Button>
                    </Form>
                </Card.Body>
        </Card>
        </Container>
    )


}

