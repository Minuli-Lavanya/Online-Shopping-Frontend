import React, {Component} from 'react';
import axios from "axios";
import {Table} from 'react-bootstrap';
import '../Hotels/hotel.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class ViewResrvationsInfo extends Component {
 

    constructor(props){
        super(props);
        this.state = {rooms: []};

        this.updateRoom = this.updateRoom.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    
    componentDidMount(){
        axios.get('http://localhost:8081/hotel/room').then(response=>{
            this.setState({rooms: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8081/hotel/room').then(response =>{
            this.setState({rooms:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    updateRoom(id){
        this.props.history.push(`/EditReservationInfo/${id}`);
       
    }

    onDelete=(id) =>{
        if(window.confirm("Are You Sure Want to Delete !")){
            axios.delete(`http://localhost:8081/hotel/room/${id}`).then((res)=>{
                this.setState({rooms: this.state.rooms.filter(rooms => rooms.id !== id)});
                this.props.history.push('/ViewResrvationsInfo');
                
            }) ;
            

        }
        else{
            this.props.history.push(`/not`);
        }
    }


   
    
    render(){
        console.log("s", this.state.rooms);
        return (
            
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Room Details</h2>
                </div>
                

                
                <br/>
                
                    
                    <Table bordered hover size="sm" style={{width: "1200px", marginLeft: "180px", borderRadius: "12px"}}>
                        
                        <thead>
                            <tr className='table-tr'>

                            
                            <th scope="col">Room ID</th>
                            <th scope="col">Room Type</th>
                            <th scope="col">Availability</th>
                            <th scope="col">Description</th>
                            <th scope="col">Room Charge</th>
                            <th scope="col">Air Condition Type</th>
                            <th scope="col">Action</th>
                            
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 this.state.rooms.map((p)=>
                                
                                
                                    <tr key = {p.id}>
                                        
                                      <td>{p.id}</td>
                                     <td>{p.roomType}</td>
                                     <td>{p.availability}</td>
                                     <td>{p.description}</td>
                                     <td>{p.unitPrice}</td>
                                     <td>{p.ac_nonAc}</td>
                                     
                                        
                                        <td>
                                            <button  style={{background: "#1c3746", fontSize: ".84rem", borderRadius: "10px"}} className="btn btn-secondary" 
                                            onClick={(e)=>{this.updateRoom(p.id)}}> <FontAwesomeIcon icon={faEdit}  className={"mr-2"}/>Update</button>
                                            <button   style={{background: "#f01c1c", marginLeft: "15px", fontSize: ".84rem", borderRadius: "10px"}} className="btn btn-secondary"
                                            onClick={() =>this.onDelete(p.id)}><FontAwesomeIcon icon={faTrash}  className={"mr-2"}/>Delete </button>
                                            
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

