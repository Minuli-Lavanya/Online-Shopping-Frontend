import React, {Component} from 'react';
import axios from 'axios';
import '../Styles/table.css';
import * as AiIcon from "react-icons/ai";


export default class SupplierDetailsList extends Component {

    constructor(props){
        super(props);
        this.state = {suppliers:[]};

        this.addSupplier = this.addSupplier.bind(this);
    }

    

    componentDidMount(){
        axios.get("http://localhost:8070/supplier/").then(response =>{
            this.setState({suppliers:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    addSupplier(){
        this.props.history.push('/add');
    }




    render(){
        
        return(


            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Supplier Details</h2>
                </div>

                <div className = "form-group col-md-3" >
                    
                    <input type="text" class="form-control" style={{marginLeft:295}} placeholder="Enter Supplier Name" />
                </div>                

                <div>
                    <button style={{marginLeft:1035,  background: "#072344"}} className = "btn btn-secondary" onClick={this.addSupplier}>Add Supplier Details</button>
                    <button style={{marginLeft:10, background: "#143957"}} className="btn btn-secondary" type='submit'>Generate Report</button>
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
                                <th>Action</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                
                                this.state.suppliers.map(
                                    supplier =>
                                    <tr key = {supplier.userId}>
                                        
                                        <td>{supplier.supplier_id}</td>
                                        <td>{supplier.supplier_name}</td>
                                        <td>{supplier.email}</td>
                                        <td>{supplier.nic}</td>
                                        <td>{supplier.phone_number}</td>
                                        <td>{supplier.gender}</td>
                                        <td>
                                            <button style={{background: "#1c3746"}} className="btn btn-secondary"><AiIcon.AiOutlineEdit/></button>
                                            <button style={{background: "#24547c", marginLeft: "20px"}} className="btn btn-secondary"><AiIcon.AiOutlineDelete/></button>
                                            
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

