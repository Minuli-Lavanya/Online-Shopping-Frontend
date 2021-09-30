import React, {Component} from 'react';
import { Card, Form, Button, Container } from 'react-bootstrap';
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom'

import { GlobalState } from '../../../../GlobalState'
import Loading from '../../utils/loading/Loading'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const initialState = {
    userName: '',
    orderID: '',
    total: '',
    name:'',
    city:'',
    postalCode:'',
    address:'',
    contactNo:'',
    nameError:'',
    cityError:'',
    postalCodeError:'',
    addressError:'',
    contactNoError:''
    
}



toast.configure()
class AddDelivery extends Component {
    constructor(props){
        super(props)

        this.state = initialState;

        this.changeuserNameHandler= this.changeuserNameHandler.bind(this);
        this.changeorderIDHandler= this.changeorderIDHandler.bind(this);
        this.changetotalHandler= this.changetotalHandler.bind(this);
        this.changenameHandler= this.changenameHandler.bind(this);
        this.changecityHandler= this.changecityHandler.bind(this);
        this.changepostalCodeHandler= this.changepostalCodeHandler.bind(this);
        this.changeaddressHandler= this.changeaddressHandler.bind(this);
        this.changecontactNoHandler= this.changecontactNoHandler.bind(this);
        

    }
    notify(){
        toast.warn('Delivery Added Successfully!', {position: toast.POSITION.TOP_CENTER})

    }

    


    

    validate =()=>{ 
       let nameError = "";
       let cityError =  "";
       let postalCodeError =  "";
       let addressError =  "";
       let contactNoError =  "";
          

          
          if(!this.state.name) {
            nameError ='Name no is Required';
          }
          if(!this.state.city) {
            cityError='City is Required';
          }
          if(!this.state.postalCode) {
            postalCodeError= 'Postal Code is Required';
          }
          if(!this.state.address) {
            addressError= 'Address is Required';
          }
          if(!this.state.contactNo) {
            contactNoError ='Contact Number is Required';
          }
          
          if (nameError || cityError || postalCodeError || addressError || contactNoError ){
              this.setState({nameError , cityError, postalCodeError, addressError, contactNoError});
              return false;
          }

          return true;

    };
    
    
    sendData = (e)=>{
        e.preventDefault();
        const isValid = this.validate();
        if(isValid){
            
        
            const newDelivery ={
                userName:this.state.userName,
                orderID:this.state.orderID,
                total:this.state.total,
                name:this.state.name,
                city:this.state.city,
                postalCode:this.state.postalCode,
                address:this.state.address,
                contactNo:this.state.contactNo

            }

            

            axios.post("http://localhost:5000/delivery/add", newDelivery).then(()=>{
                alert("Delivery Added")
                this.notify();
                this.props.history.push('/addpayment');

                
            }).catch((err)=>{
                alert(err)
            })

            
        }
        
    };
    changeuserNameHandler = (event) => {
        this.setState({userName: event.target.value});
    }
    changeorderIDHandler = (event) => {
        this.setState({orderID: event.target.value});
    }
    changetotalHandler = (event) => {
        this.setState({total: event.target.value});
    }
    changenameHandler = (event) => {
        this.setState({name: event.target.value});
    }
    changecityHandler =(event) => {
        this.setState({city: event.target.value});
    }
    changepostalCodeHandler = (event) => {
        this.setState({postalCode: event.target.value});
    }
    changeaddressHandler = (event) => {
        this.setState({address: event.target.value});
    }
    changecontactNoHandler = (event) => {
        this.setState({contactNo: event.target.value});
    }


    render(){
        return(

            <div className="container" style={{ marginTop: 40 }}>
                <div className="row" className="css">
                    <div className={"col-md-6 offset-md-3 offset-md-3"} style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                        <h3 style={{ background: "#072344", color: "white" }}><center>ADD DELIVERY  DETAILS</center></h3>
                        <div className="card-body" >

                            <form onSubmit={this.sendData} style={{ alignContent: "center" }}>
                                <div className="form-group" >
                                    <label htmlFor="name">Username</label>
                                    <input type="text" className="form-control" id="userName" placeholder="" 
                                        // onChange={
                                        //     this.changeuserNameHandler
                                        // }
        
                                        defaultValue={localStorage.getItem('mail')}
                                        // onChange={(e) => {
                                        //     setName(e.target.value);
                                        // }}
                                    />
                                    
                                </div>

                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="city">OrderID</Form.Label>
                                    <Form.Control type="text" className="form-control" id="orderID" 
                                        // onChange={
                                        //     this.changeorderIDHandler
                                        // }
                                        defaultValue={localStorage.getItem('orderID')}

                                        // onChange={(e) => {
                                        //     setCity(e.target.value);
                                        // }}
                                    />
                                
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="city">Total Payment</Form.Label>
                                    <Form.Control type="number" className="form-control" id="total" 
                                        // onChange={
                                        //     this.changetotalHandler
                                        // }
                                        defaultValue={localStorage.getItem('total')}

                                        // onChange={(e) => {
                                        //     setCity(e.target.value);
                                        // }}
                                    />
                                
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="postal_code">Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="name" placeholder="" value = {this.state.name} 
                                        onChange={
                                            this.changenameHandler
                                        }
                                    />
                                    
                                </Form.Group>
                                <div style ={{fontSize:"14px", color:"red"}}>{this.nameError}</div>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="address">City</Form.Label>
                                    <Form.Control type="text" className="form-control" id="city" placeholder="" value = {this.state.city} 
                                        onChange={
                                            this.changecityHandler
                                        }
                                    />
                                    
                                </Form.Group>
                                <div style ={{fontSize:"14px", color:"red"}}>{this.cityError}</div>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="contactNo">Postal Code</Form.Label>
                                    <Form.Control type="number" className="form-control" id="postalCode"  value = {this.state.postalCode} 
                                        onChange={
                                            this.changepostalCodeHandler
                                        }
                                    />
                                    
                                </Form.Group>
                                <div style ={{fontSize:"14px", color:"red"}}>{this.postalCodeError}</div>
                                

                                
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="cardNo">Address</Form.Label>
                                    <Form.Control type="text" className="form-control" id="address" value = {this.state.address}                               
                                        onChange = {
                                            this.changeaddressHandler
                                        }   
                                    />
                                            
                                </Form.Group>
                                <div style ={{fontSize:"14px", color:"red"}}>{this.addressError}</div>
                                <Form.Group className="mb-3" >
                                    <Form.Label htmlFor="cardNo">Contact Number</Form.Label>
                                    <Form.Control type="tel" className="form-control" id="contactNo" value = {this.state.contactNo} style ={{maxLength:10}}                              
                                        onChange = {
                                            this.changecontactNoHandler
                                        }   
                                    />
                                            
                                </Form.Group>
                                <div style ={{fontSize:"14px", color:"red"}}>{this.contactNoError}</div>
                                
                                




                                <Button variant="primary" type="submit" style={{ marginLeft: 250, background: "#24547c", width: 70 }}>SAVE</Button>
                                <Button variant="primary" type="reset" style={{ marginLeft: 380, marginTop: -63, background: "#24547c", width: 70 }}>RESET</Button>
                            </form>


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default AddDelivery;