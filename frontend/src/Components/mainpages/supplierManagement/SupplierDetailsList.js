import React, {Component} from 'react';
import axios from 'axios';
import '../../../Styles/table.css'
import * as AiIcon from "react-icons/ai";


export default class SupplierDetailsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            suppliers:[],
            // searchId:''
            
        };

        this.addSupplier = this.addSupplier.bind(this);
        this.updateSupplier = this.updateSupplier.bind(this);
        this.onDelete = this.onDelete.bind(this);
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

    // searchSupName(event){
    //     this.setState({ searchId: event.target.value.substr(0,
    //         20)});
    // }

    

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

        // let filtersupplier_name = this.state.suppliers.filter((
        //     supplier)=>{
        //         return supplier.supplier_name.toLowerCase().indexOf(this.state.
        //             searchId.toLowerCase())!==-1;
        //     }
        // );

        
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


// import React, {Component} from 'react';
// import axios from 'axios';


// export default class SupplierDetailsList extends Component {

//     constructor(props){
//         super(props);
//         this.state = {suppliers:[]};
//     }

//     componentDidMount(){
//         axios.get("http://localhost:8070/supplier/").then(response=>{
//             this.setState({suppliers:response.data})
//         }).catch(function (error){
//             console.log(error);
//         })
//     }

   

//     onDelete=(id) =>{
//         axios.delete(`http://localhost:8070/supplier/delete/${id}`).then((res)=>{
//             alert("Delete Successfully");

//         })
//     }

    


    

//     render(){
//         console.log(this.state.suppliers);
//         return (
//             <div>
//                 <div>
//                 <a className="btn btn-success" href="/pdfGenerate" style={{marginTop: "5px", marginLeft: "5px"}}>
//                     <i className="fa fa-file-o"></i>&nbsp;Generate PDF
//                 </a>
//                     <input className="form-control" type="search" placeholder="Search.." name="searchQuery" style={{width:"7cm", marginLeft:"33.5cm", marginTop:"-1cm"}} />
//                 </div>
//                 <table className="table table-striped" id="pdfdiv" style={{marginTop:20, fontSize:"14px", backgroundColor: "white"}}>
//                     <thead>
//                         <tr>

//                             <th>#</th>
//                             <th>Route</th>
//                             <th>Bus Number</th>
//                             <th>Route From</th>
//                             <th>Route To</th>
//                             <th>Cost</th>
                        
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.suppliers.map((p, index)=>{
//                             return <tr key={index}>
//                                 <td>
//                                     <a href={`/supplier/${p._id}`} style={{textDecoration:"none"}}>
//                                         {index+1}
//                                     </a> 
//                                 </td>       
//                                 <td>{p.supplier_id}</td>
//                                 <td>{p.supplier_name}</td>
//                                 <td>{p.email}</td>
//                                 <td>{p.nic}</td>
//                                 <td>{p.phone_number}</td>
//                                 <td>{p.gender}</td>
//                                 <td>
//                                     <a className="btn btn-warning" href={`/supupdate/${p._id}`}>
//                                         &nbsp;Edit
//                                     </a>
//                                     &nbsp;
//                                     <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(p._id)}>
//                                         &nbsp;Delete
//                                     </a>
//                                 </td>


//                             </tr>
//                         })}
//                     </tbody>

//                 </table>
//             </div>
//         );
//     }
// }



