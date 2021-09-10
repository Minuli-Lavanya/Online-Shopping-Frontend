import React, { Component } from 'react';
import axios from 'axios';

class ViewItem extends Component {
    constructor(props){
        super(props);
        this.state = {item:[]};

        

        
    }

    componentDidMount(){
        axios.get("http://localhost:8070/item/get/:id").then(response =>{
            this.setState({item:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    

    

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-5 offset-md-3 offset-md-3" style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                    <h3 className = "text-center">View Supplied Item Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Supplied Item ID :</lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.item.supItemId} </div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Supplier Name : </lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.item.supName } </div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Item Name : </lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.item.itemName} </div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Purchased Date : </lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.item.purchasedDate } </div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Quantity : </lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.item.quantity} </div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Unit Price : </lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.item.unitprice} </div>
                        </div>
                        <br></br>
                        <div className = "row">
                            <div style={{fontWeight:"bold"}}>
                                <lable> Total Amount : </lable>
                            </div>
                            <div style={{marginLeft:10}}> { this.state.item.totalAmount} </div>
                        </div>
                        <div class="form-group col-md-6">
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewItem;