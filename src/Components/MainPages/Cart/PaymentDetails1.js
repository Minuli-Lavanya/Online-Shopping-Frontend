import React, {useState, useContext} from 'react';
import {Card, Form, Button, Container} from 'react-bootstrap';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom'

import {GlobalState} from '../../../GlobalState'
import Loading from '../Utils/loading/Loading'

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);


const initialState = {
    // name: '',
    // city: '',
    // postal_code: '',
    // address: '',
    // contactNo: '',
    cardType: '',
    cardNo: '',
    expMonth: '',
    expYear: '',
    cvn: ''
}


export default function PaymentDetails1(){
    
    // const [paymentdetail, setPayment] = useState(initialState)
    // const state = useContext(GlobalState)
    const state = useContext(GlobalState)
    // const [name, setName] = useState(initialState);
    // const [city, setCity] = useState(initialState);
    // const [postal_code, setPostalCode] = useState(initialState);
    // const [address, setAddress] = useState(initialState);
    // const [contactNo, setContactNo] = useState(initialState);
    const [cardType, setcardType] = useState(initialState);
    const [cardNo, setCardNo] = useState(initialState);
    const [expMonth, setExpMonth] = useState(initialState);
    const [expYear, setExpYear] = useState(initialState);
    const [cvn, setCVN] = useState(initialState);
    const [token] = state.token
    const history = useHistory();
    
   
    
    // const handleChangeInput = e =>{
    //     const {name, value} = e.target
    //     setPayment({...paymentdetail, [name]:value})
    // }
    
    function sendData (e)  {
        e.preventDefault();
        // const validate = () =>{
        //     let nameError ="";
        //     let cityError ="";
        //     let postalCodeError ="";
        //     let addressError ="";
        //     let contactNoError ="";
        //     let cardTypeError ="";
        //     let cardNoError ="";
        //     let expMonthError ="";
        //     let expYearError = "";
        //     let cvnError = "";
    
        //     if(!this.name){
        //         nameError  = 'Name is Required';
        //     }
        //     if(!this.city){
        //         cityError  = 'City is  is Required';
        //     }
        //     if(!this.postal_code){
        //         postalCodeError  = 'Postal code is Required';
        //     }
        //     if(!this.address){
        //         addressError  = 'Address is Required';
        //     }
        //     if(!this.contactNo){
        //         contactNoError  = 'Contact number is Required';
        //     }
        //     if(!this.cardType){
        //         cardTypeError  = 'Card type Id is Required';
        //     }
        //     if(!this.cardNo){
        //         cardNoError  = 'Card number is Required';
        //     }
        //     if(!this.expMonth){
        //         expMonthError  = 'Expiration month is Required';
        //     }
        //     if(!this.expYear){
        //         expYearError  = 'payment is Required';
        //     }
        //     if(!this.cvn){
        //         cvnError  = 'CVN is Required';
        //     }
        //     if(nameError || cityError || postalCodeError || addressError || contactNoError || cardTypeError || cardNoError || expMonthError || expYearError || cvnError){
        //         this.setState({nameError, cityError, postalCodeError, addressError, contactNoError, cardTypeError, cardNoError, expMonthError, expYearError, cvnError });
        //         return false;
        //     }
    
        //     return true;
    
        // };

        //const isValid = validate();
        
        
            const newPayment ={
                // name,
                // city,
                // postal_code,
                // address,
                // contactNo,
                cardType,
                cardNo,
                expMonth,
                expYear,
                cvn,
                
            }

            axios.post('/api/payment', { cardNo, expMonth, expYear, cvn }, {
                headers: {Authorization: token}
            })
            history.push('/history1');
            alert("You have successfully placed an order.")
            
            
         
        

        

    }
    

    return(

        <div className = "container" style={{marginTop:40}}>
            <div className="row" className = "css">
                <div className={"col-md-6 offset-md-3 offset-md-3"} style = {{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                    {/* <h3 style={{background: "#072344", color: "white"}}><center>ADD DELIVERY  DETAILS</center></h3>     */}
                        <div className = "card-body" >    
                            
                                <form onSubmit={sendData} style ={{alignContent:"center"}}>
                                    
                                    
                                    <h3 style={{background: "#072344", color: "white"}}><center>ADD PAYMENT  DETAILS</center></h3>
                                    <Form.Group className="mb-3" controlId="formBasicid">
                                        <Form.Label htmlFor="contactNo">Card Type</Form.Label>
                                        <select name = "cardType" id="cardType" className ="form-control"  required
                                        onChange = {(e) => {
                                            setcardType(e.target.value);
                                        }}>  
                                        
                                            <option value ="CHOOSE">Choose</option>
                                            <option value ="master">Master</option>
                                            <option value ="visa">Visa</option>
                                            

                                        </select>
                                        {/* <div style ={{fontSize:"14px", color:"red"}}>{this.cardTypeError}</div> */}

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicid">
                                        <Form.Label htmlFor="cardNo">Card Number</Form.Label>
                                        <Form.Control type="number" className="form-control" id="cardNo"  pattern ="[1-9]{10}" maxLength = "04" required                             
                                        onChange = {(e) => {
                                            setCardNo(e.target.value);
                                        }}   
                                        />
                                        {/* <div style ={{fontSize:"14px", color:"red"}}>{this.cardNoError}</div> */}
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicid">
                                        <Form.Label htmlFor="expMonth">Exp Month</Form.Label>
                                        <select name="expMonth" className="form-control" id="expMonth"  required
                                        onChange = {(e) => {
                                            setExpMonth(e.target.value);
                                        }}  
                                        >
                                            <option value = "MONTH">Month</option>
                                            <option value = "January">January</option>
                                            <option value = "February">February</option>
                                            <option value = "March">March</option>
                                            <option value = "April">April</option>
                                            <option value = "May">May</option>
                                            <option value = "June">June</option>
                                            <option value = "July">July</option>
                                            <option value = "August">August</option>
                                            <option value = "September">September</option>
                                            <option value = "October">October</option>
                                            <option value = "November">November</option>
                                            <option value = "December">December</option>

                                        {/* <div style ={{fontSize:"14px", color:"red"}}>{this.expMonthError}</div> */}
                                        </select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicid">
                                        <Form.Label htmlFor="expYear">Exp Year</Form.Label>
                                        <select name = "expYear" className="form-control" id="expYear"  required
                                        onChange = {(e) => {
                                            setExpYear(e.target.value);
                                        }}  
                                        >
                                            <option value = "Year">Year</option>
                                            <option value = "MONTH">2021</option>
                                            <option value = "MONTH">2022</option>
                                            <option value = "MONTH">2023</option>
                                            <option value = "MONTH">2024</option>
                                            <option value = "MONTH">2025</option>
                                            <option value = "MONTH">2026</option>
                                            <option value = "MONTH">2027</option>
                                            <option value = "MONTH">2028</option>
                                            <option value = "MONTH">2039</option>
                                            
                                        {/* <div style ={{fontSize:"14px", color:"red"}}>{this.expYearError}</div> */}

                                        </select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicid">
                                        <Form.Label htmlFor="cvn">CVN</Form.Label>
                                        <Form.Control type="number" className="form-control" id="cvn" pattern ="[1-9]{10}" maxLength = "04" required 
                                        onChange = {(e) => {
                                            setCVN(e.target.value);
                                        }}   
                                        />
                                        <p style ={{color:"#24547c"}}>**This code is a 3 or 4 digit number printed on the back or front of the credit card.**</p>
                                        {/* <div style ={{fontSize:"14px", color:"red"}}>{this.cvnError}</div> */}
                                    </Form.Group>
                                    

                                

                                    <Button variant="primary" type="submit" style={{marginLeft:250, background: "#24547c", width:90}}>Pay Now</Button>
                                    <Button variant="primary"/*"btn btn-danger"*/ type = "reset" /*onClick = {this.cancel.bind(this)}*/ style={{marginLeft:380,marginTop:-63, background: "#24547c", width:70}}>RESET</Button>
                                </form>
                            

                        </div>
                
                </div>
            </div>
        </div>
    )
}