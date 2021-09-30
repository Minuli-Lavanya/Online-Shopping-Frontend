import React, { Component } from 'react';
import axios from 'axios';

class ItemReportTable extends Component {

    constructor(props){
        super(props);
        this.state = {item:[]
        
        };

    }

    componentDidMount(){
        axios.get("http://localhost:8070/item/").then(response =>{
            this.setState({item:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    render(){
        
        
        return(

            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Supplied Item Details</h2>
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
                                
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                
                                this.state.item.map(
                                    items =>
                                    <tr key = {items._id}>
                                        
                                        <td>{items.supItemId}</td>
                                        <td>{items.supName}</td>
                                        <td>{items.itemName}</td>
                                        <td>{items.purchasedDate}</td>
                                        <td>{items.quantity}</td>
                                        <td>{items.unitprice}.00</td>
                                        <td>{items.totalAmount}.00</td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                
            </div>
        )
    }

}

export default ItemReportTable;