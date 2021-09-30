import React, { Component } from 'react'
import axios from 'axios';
import { Card, Form, Button, Container } from 'react-bootstrap';

export default class itemUpdate extends Component {


    constructor(props) {
        super(props);

        this.onChangeSupid = this.onChangeSupid.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeitemName = this.onChangeitemName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeQTY = this.onChangeQTY.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            
            supItemId: '',
            supName: '',
            itemName: '',
            purchasedDate: '',
            quantity: '',
            unitprice: ''

        };



    };

    componentDidMount(){
                axios.get('http://localhost:8070/item/get/' + this.props.match.params.id)
                    .then(response =>{
                        this.setState({
        
                            supItemId:response.data.item.supItemId,
                            supName:response.data.item.supName,
                            itemName:response.data.item.itemName,
                            purchasedDate:response.data.item.purchasedDate,
                            quantity:response.data.item.quantity,
                            unitprice:response.data.item.unitprice,
        
                        })
                    })
                    .catch(function(error){
                        console.log(error)
                    });
            }

 

    onChangeSupid(e) {
        this.setState({ supItemId: e.target.value });
    }
    onChangeName(e) {
        this.setState({ supName: e.target.value });
    }
    onChangeitemName(e) {
        this.setState({ itemName: e.target.value });
    }
    onChangeDate(e) {
        this.setState({ purchasedDate: e.target.value });
    }
    onChangeQTY(e) {
        this.setState({ quantity: e.target.value });
    }
    onChangePrice(e) {
        this.setState({ unitprice: e.target.value });
    }




    onSubmit(e) {
        e.preventDefault();
        const obj = {
            supItemId: this.state.supItemId,
            supName: this.state.supName,
            itemName: this.state.itemName,
            purchasedDate: this.state.purchasedDate,
            quantity: this.state.quantity,
            unitprice: this.state.unitprice

        };

        axios.put("http://localhost:8070/item/update/" + this.props.match.params.id, obj)
            .then(res => console.log(res.data),
                alert("Update Successfully"));

        this.props.history.push('/itemList');
    }

    render() {


        return (

            <Container style={{marginTop:40}}>
        <Card className = {"col-md-6 offset-md-3 offset-md-3"} style = {{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
            <Card.Header style={{background: "#072344", color: "white"}}><center>Update Supplied Item Details</center></Card.Header>
                <Card.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicid">
                            <Form.Label>Supplied Item ID</Form.Label>
                            <Form.Control type="text" placeholder="SI####" id="supItemId" pattern="[S][I][0-9][0-9][0-9][0-9]" required
                            value={this.state.supItemId}
                            onChange={this.onChangeSupid} />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicname">
                            <Form.Label>Supplier Name</Form.Label>
                            <Form.Control type="text" placeholder="Supplier Name" id="supName" required
                            value={this.state.supName}
                            onChange={this.onChangeName}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicemail">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control type="text" placeholder="Item" id="itemName" required
                            value={this.state.itemName}
                            onChange={this.onChangeitemName}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicnic">
                            <Form.Label>Purchased Date</Form.Label>
                            <Form.Control type="date" placeholder="Date" id="purchasedDate" required
                            value={this.state.purchasedDate}
                            onChange={this.onChangeDate}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicno">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="qty" placeholder="Quantity" id="quantity" required
                            value={this.state.quantity}
                            onChange={this.onChangeQTY}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicno">
                            <Form.Label>Unit Price (Rs.)</Form.Label>
                            <Form.Control type="price" placeholder="Unit Price" id="unitprice" required
                            value={this.state.unitprice}
                            onChange={this.onChangePrice}/>
                        </Form.Group>

                        
                        <Button variant="primary" type="submit" style={{marginLeft:220, background: "#072344"}}>Submit</Button>
                        
                    </Form>
                </Card.Body>
        </Card>
        </Container>
        )

    }


}