import React, {Component} from 'react';
import axios from 'axios';
import '../../../Styles/table.css';
import * as AiIcon from "react-icons/ai";


export default class SupplierDetailsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            suppliers:[],
            searchId:''
            
        };

        this.addSupplier = this.addSupplier.bind(this);
        this.updateSupplier = this.updateSupplier.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.generatepdf1 = this.generatepdf1.bind(this);
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

    updateSupplier(id){
        this.props.history.push(`/supupdate/${id}`);
        // window.location = "/supupdate/"+id;
    }

    searchSupName(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }

    generatepdf1(){
        this.props.history.push('/reportsupplier');
    }



    onDelete=(id) =>{
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
            axios.delete(`http://localhost:8070/supplier/delete/${id}`).then((res)=>{
                this.setState({suppliers: this.state.suppliers.filter(suppliers => suppliers.id !== id)});
                
            }) ;
            

        }
        else{
            this.props.history.push(`/`);
        }
    }


    render(){
        console.log(this.state.suppliers);

        let filtersupplier_name = this.state.suppliers.filter((
            supplier)=>{
                return supplier.supplier_name.toLowerCase().indexOf(this.state.
                    searchId.toLowerCase())!==-1;
            }
        );

        
        return(


            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Supplier Details</h2>
                </div>

                <div className = "form-group col-md-3" >
                    
                    <input type="text" class="form-control" style={{marginLeft:295}} placeholder="Enter Supplier Name" value={this.state.searchId} onChange={this.searchSupName.bind(this)}/>
                </div>                

                <div>
                    <button style={{marginLeft:1035,  background: "#072344"}} className = "btn btn-secondary" onClick={this.addSupplier}>Add Supplier Details</button>
                    <button style={{marginLeft:10, background: "#143957"}} className="btn btn-secondary" onClick={this.generatepdf1} type='submit'>Generate Report</button>
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
                                filtersupplier_name.map(
                                    supplier=>
                                // this.state.suppliers.map(
                                //     supplier =>
                                    <tr key = {supplier._id}>
                                        <td>{supplier.supplier_id}</td>
                                        <td>{supplier.supplier_name}</td>
                                        <td>{supplier.email}</td>
                                        <td>{supplier.nic}</td>
                                        <td>{supplier.phone_number}</td>
                                        <td>{supplier.gender}</td>
                                        <td>

                                            {/* <a className="btn btn-warning" href={`/supupdate/${supplier._id}`}>
                                            &nbsp;Edit
                                            </a> */}
                                            <button style={{background: "#1c3746"}} className="btn btn-secondary" onClick={(e)=>{this.updateSupplier(supplier._id)}}><AiIcon.AiOutlineEdit/></button>
                                            <button style={{background: "#24547c", marginLeft: "20px"}} className="btn btn-secondary" onClick={() =>this.onDelete(supplier._id)}><AiIcon.AiOutlineDelete/></button>
                                            
                                            
                                            
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



