import React, {Component} from 'react';
import axios from 'axios';
import '../Styles/table.css';
import * as AiIcon from "react-icons/ai";


export default class SupplierDetailsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            suppliers:[]
            
        };

        
    }

    

    componentDidMount(){
        axios.get("http://localhost:8070/supplier/").then(response =>{
            this.setState({suppliers:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

   

    render(){
        

        

        
        return(


            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Supplier Details</h2>
                </div>

                
                
                <br/>
                
                    <table className="attendtable">
                        <thead>
                            <tr>
                                
                                <th>Supplier ID</th>
                                <th>Supplier Name</th>
                                <th>Email</th>
                                <th>NIC</th>
                                <th>Contact Number</th>
                                <th>Gender</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                this.state.suppliers.map(
                                    supplier =>
                                    <tr key = {supplier._id}>
                                        <td>{supplier.supplier_id}</td>
                                        <td>{supplier.supplier_name}</td>
                                        <td>{supplier.email}</td>
                                        <td>{supplier.nic}</td>
                                        <td>{supplier.phone_number}</td>
                                        <td>{supplier.gender}</td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                
            </div>
        )
    }
    
}