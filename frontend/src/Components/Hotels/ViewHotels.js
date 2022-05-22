import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import axios from "axios";
import {Table} from 'react-bootstrap';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


export default class ViewHotels extends Component {
 

    constructor(props){
        super(props);
        this.state = {hotel: []};

        this.updateHotel = this.updateHotel.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    
    componentDidMount(){
        axios.get('http://localhost:8081/hotels/add').then(response=>{
            this.setState({hotel: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8081/hotels/add').then(response =>{
            this.setState({hotel:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    updateHotel(id){
        this.props.history.push(`/editHotels/${id}`);
       
    }

    onDelete=(id) =>{
        if(window.confirm("Are You Sure Want to Delete !")){
            axios.delete(`http://localhost:8081/hotels/add/${id}`).then((res)=>{
                this.setState({hotel: this.state.hotel.filter(hotel => hotel.id !== id)});
                this.props.history.push('/viewHotels');
                
            }) ;
            

        }
        else{
            this.props.history.push(`/not`);
        }
    }


   
    
    render(){
        console.log("s", this.state.hotel);
        return (
            
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Hotel Details</h2>
                </div>
                
                
               
                <br/>
                
                    {/* <table className="table table-hover"> */}
                    <Table bordered hover size="sm" style={{width: "1200px", marginLeft: "180px", borderRadius: "12px"}}>
                        
                        <thead>
                            <tr className='table-tr'>
                            
                            <th scope="col">Hotel Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Address</th>
                            <th scope="col">About</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Action</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 this.state.hotel.map((p)=>
                                
                                
                                    <tr key = {p.id}>
                                        
                                      <td>{p.name}</td>
                                     <td>{p.email}</td>
                                     <td>{p.telNo}</td>
                                     <td>{p.address}</td>
                                     <td>{p.description}</td>
                                     <td>{p.destination}</td>
                                        
                                        <td>
                                            <button style={{background: "#1c3746", fontSize: ".84rem", borderRadius: "10px"}} className="btn btn-secondary" 
                                            onClick={(e)=>{this.updateHotel(p.id)}}><FontAwesomeIcon icon={faEdit}  className={"mr-2"}/>Update</button>
                                            
                                            <button style={{background: "#f01c1c", marginLeft: "15px", fontSize: ".84rem", borderRadius: "10px"}} className="btn btn-secondary" onClick={() =>this.onDelete(p.id)}> <FontAwesomeIcon icon={faTrash}  className={"mr-2"}/>Delete</button>
                                            
                                        </td> 
                                    </tr>
                                )
                            }
                        </tbody>


                    </Table>
                
            </div>


        );
    }


    
}

