import React, {Component} from 'react';
import axios from "axios";
import {Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';



export default class Resrvations extends Component {
 

    constructor(props){
        super(props);
        this.state = {reservation: []};

        this.updateReservation = this.updateReservation.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    
    componentDidMount(){
        axios.get('http://localhost:8081/hotel/reservation').then(response=>{
            this.setState({reservation: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8081/hotel/reservation').then(response =>{
            this.setState({reservation:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    updateReservation(id){
        this.props.history.push(`/editHotels/${id}`);
       
    }

    onDelete=(id) =>{
        if(window.confirm("Are You Sure Want to Delete !")){
            axios.delete(`http://localhost:8081/hotel/reservation/${id}`).then((res)=>{
                this.setState({reservation: this.state.reservation.filter(hotel => hotel.id !== id)});
                this.props.history.push('/v');
                
            }) ;
            

        }
        else{
            this.props.history.push(`/viewTimetable`);
        }
    }


   
    
    render(){
        console.log("s", this.state.reservation);
        return (
            
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Reservation Details</h2>
                </div>
                


                   
                
                <br/>
                
                    {/* <table className="table table-hover"> */}
                    <Table bordered hover size="sm" style={{width: "1200px", marginLeft: "180px", borderRadius: "12px"}}>
                        
                        <thead className='table-tr'>
                            <tr>
                            
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tel No</th>
                            <th scope="col">Check In</th>
                            <th scope="col">Check Out</th>
                            <th scope="col">No of Adult</th>
                            <th scope="col">No of Child</th>
                            <th scope="col">Room Type</th>
                            <th scope="col">No of Rooms</th>
                            <th scope="col">Action</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 this.state.reservation.map((p)=>
                                
                                
                                    <tr key = {p.id}>
                                        
                                      <td>{p.tname}</td>
                                     <td>{p.temail}</td>
                                     <td>{p.mobileNo}</td>
                                     <td>{p.checkIn}</td>
                                     <td>{p.checkOut}</td>
                                     <td>{p.noOfAdult}</td>
                                     <td>{p.noOfChild}</td>
                                     <td>{p.roomType}</td>
                                     <td>{p.noOfRooms}</td>
                                        
                                        <td>
                                            
                                            <button style={{background: "#f01c1c", marginLeft: "15px", fontSize: ".84rem", borderRadius: "10px"}}  className="btn btn-secondary" 
                                            onClick={() =>this.onDelete(p.id)}><FontAwesomeIcon icon={faTrash}  className={"mr-2"}/>Delete</button>
                                            
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

