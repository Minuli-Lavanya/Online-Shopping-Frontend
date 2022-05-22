import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import '../Hotels/hotel.css';


export default class SingleDetailedRoom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
            id:'',
            roomType:'', 
            availability:'', 
            description:'', 
            unitPrice:'', 
            ac_nonAc:'',

        };

    }

    componentDidMount(){
        axios.get('http://localhost:8081/hotel/room/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    id:response.data.id,
                    roomType:response.data.roomType,
                    availability:response.data.availability,
                    description:response.data.description,
                    unitPrice:response.data.unitPrice,
                    ac_nonAc:response.data.ac_nonAc,
                    
                    

                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    
    render() {
        return(


            <div>
            
                <img
                    className={"image-3"}
                    src={require('../../img/IMG5.jpg')}
                    alt="Image-Hotel"
                />
                    <div className={"box-view"}>
                        <br></br>
                        <span id='heading2' style={{'marginLeft':'3cm'}}>{this.state.roomType}</span><br></br>
                                

                        {/* <div className={"Text-view-2"}>
                            <section className={"Text-view-3"}> ID :hotel-ID_0{this.state.id}</section>
                            <section className={"Text-view-3"}> Hotel Name :{this.state.name}</section>
                            <section className={"Text-view-3"}> Email :{this.state.email}</section>                        
                            <section className={"Text-view-3"}> Tep :{this.state.telNo}</section>
                            <section className={"Text-view-3"}> Region : {this.state.destination}</section>
                            <section className={"Text-view-3"}> Address : {this.state.address}</section>
                            <section className={"Text-view-3"}> Description : {this.state.description}</section>
                            
                        
                        </div> */}



                        <br></br>
                        <table className={"Table-view"}>
                            <tr>
                                <td>ID</td>
                                <td>room-Id_0{this.state.id}</td>
                            </tr>
                            <tr>
                                <td>Room Type</td>
                                <td>{this.state.roomType}</td>
                            </tr>
                            <tr>
                                <td>Availability</td>
                                <td>{this.state.availability}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{this.state.description}</td>
                            </tr>
                            <tr>
                                <td>Charge</td>
                                <td>{this.state.unitPrice}</td>
                            </tr>
                            <tr>
                                <td>AirCondition Ststus</td>
                                <td>{this.state.ac_nonAc}</td>
                            </tr>
                           
                        </table>

                        
                        <div>
                            

                        <Link className={"link-1"} to="/AllReservationInfo"><FontAwesomeIcon
                            icon={faListAlt} className={"mr-2"}/> View Room Details</Link>
                        </div>
                        
                    </div> 

            
            </div>
        )
    }
}



