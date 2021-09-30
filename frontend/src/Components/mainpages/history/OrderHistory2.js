import React, {Component} from 'react';
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class allDeliveries2 extends Component {

    constructor(props){
        super(props);
        this.state = {deliveries: [], searchId:''};
        
    }

    componentDidMount(){
        axios.get('http://localhost:5000/delivery/').then(response=>{
            this.setState({deliveries: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

   

    onDelete=(id) =>{
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
            axios.delete(`http://localhost:5000/delivery/delete/${id}`).then(res=>{
                this.setState({deliveries: this.state.deliveries.filter(delivery => delivery._id !== id)});
                confirmtext = "You Successfully delete attendance";
                
            });
        }
        else{
            confirmtext = "You pressed cancel Try again";
        }

        
    }
    searchDeliveryName(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }

    


    

    render(){
        

        let filtername = this.state.deliveries.filter((
            delivery)=>{
                return delivery.name.indexOf(this.state.
                    searchId)!==-1;
            }
        );
        //console.log(this.state.deliveries);

        return (
            <div>
                <div className="history-page">
                    {/* <a className="btn btn-success" href="/pdfGenerate" style={{marginTop: "5px", marginLeft: "5px"}}>
                        <i className="fa fa-file-o"></i>&nbsp;Generate PDF
                    </a> */}
                    
                    <div >
                        <h2>History</h2>
                        <h4>You have orderes</h4>
                    </div>
                    <input className="form-control" type="search" placeholder="Search.." name="searchQuery" style= {{width:"7cm", marginLeft:"25cm", marginTop:"-1cm"}} onChange={this.searchDeliveryName.bind(this)} />
                </div>
                <table  id="pdfdiv" style={{marginTop:20, fontSize:"14px", backgroundColor: "white"}}>
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>UserID</th>
                            <th>OrderID</th>
                            <th>Total Payment</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Postal Code</th>
                            <th>Address</th>
                            <th>Contact Number</th>
                            
                        
                        </tr>
                    </thead>
                    <tbody>
                        {filtername.map((p, index)=>{
                            return <tr key={index}>
                                <td>
                                    <a href={`/delivery/${p._id}`} style={{textDecoration:"none"}}>
                                        {index+1}
                                    </a> 
                                </td>
                                <td>{p.username}</td>       
                                <td>{p.orderID}</td>
                                <td>{p.total}</td>
                                <td>{p.name}</td>
                                <td>{p.city}</td>
                                <td>{p.postalCode}</td>
                                <td>{p.address}</td>
                                <td>{p.contactNo}</td>
                                

                                <td>
                                    {/* <a className="btn btn-warning" href={`/deliveryupdate/${p._id}`}>
                                        &nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(p._id)}>
                                        &nbsp;Delete
                                    </a> */}
                                    <a style = {{backgroundColor:"#059DC0"}}className="primary btn btn-danger" href={`/history1/${p.orderID}`}>
                                        &nbsp;View
                                    </a>
                                </td>


                            </tr>
                        })}
                    </tbody>

                </table>
            </div>
        );
    }
}