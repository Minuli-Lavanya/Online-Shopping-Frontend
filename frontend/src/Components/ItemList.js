import React, {Component} from 'react';
import axios from 'axios';
import '../Styles/table.css';
import * as AiIcon from "react-icons/ai";





export default class ItemList extends Component {

    constructor(props){
        super(props);
        this.state = {item:[]};

        this.addItem = this.addItem.bind(this);
    }

    

    componentDidMount(){
        axios.get("http://localhost:8070/item/").then(response =>{
            this.setState({item:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    addItem(){
        this.props.history.push('/itemadd');
    }



    render(){
        
        return(

            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Supplied Item Details</h2>
                </div>
                
                
                <div className = "form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:295}} placeholder="Enter Item Name" />
                </div>                

                <div>
                    <button style={{marginLeft:1090,  background: "#072344"}} className = "btn btn-secondary" onClick={this.addItem}>Add Supplied Item Details</button>
                    <button style={{marginLeft:10, background: "#143957"}} className="btn btn-secondary" type='submit'>Generate Report</button>
                </div>   
                
                <br/>
                
                    <table className="attendtable">
                        <thead>
                            <tr>
                                
                                <th>Supplied Item ID</th>
                                <th>Supplier Name</th>
                                <th>Item Name</th>
                                <th>Purchased Date</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total Amount</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                this.state.item.map(
                                    items =>
                                    <tr key = {items.userId}>
                                        
                                        <td>{items.supItemId}</td>
                                        <td>{items.supName}</td>
                                        <td>{items.itemName}</td>
                                        <td>{items.purchasedDate}</td>
                                        <td>{items.quantity}</td>
                                        <td>{items.unitprice}</td>
                                        <td>{items.totalAmount}</td>
                                        <td>
                                            <button style={{background: "#1c3746"}} className="btn btn-secondary"><AiIcon.AiOutlineEdit/></button>
                                            <button style={{background: "#24547c", marginLeft: "15px"}} className="btn btn-secondary"><AiIcon.AiOutlineDelete/></button>
                                            <button style={{background: "#5494a4", marginLeft: "15px"}} className="btn btn-secondary"><AiIcon.AiOutlineEye/></button>
                                        </td> 
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                
            </div>
        )
    }
    
}