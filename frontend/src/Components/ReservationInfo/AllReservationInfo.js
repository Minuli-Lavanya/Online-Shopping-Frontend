import React, {Component} from 'react';
import axios from "axios";
import {Button, Card, Row} from 'react-bootstrap';
import '../Hotels/hotel.css'

export default class AllReservationInfo extends Component {
 

    constructor(props){
        super(props);
        this.state = {room: []};

        this.ViewRoom = this.ViewRoom.bind(this);
    }

    
    componentDidMount(){
        axios.get('http://localhost:8081/hotel/room').then(response=>{
            this.setState({room: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    ViewRoom(id){
        this.props.history.push(`/SingleDetailedRoom/${id}`);
       
    }

    
    render(){
        console.log("s", this.state.room);
        return (
            
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Room Details</h2>
                </div>

                <div>
                <Row className="justify-content-md-center">
                    {this.state.room.slice(0,this.state.visible).map(room =>

                        <Card style={{width: '21rem', border:'none'}} className={"name"} key={room.id}>

                            <Card.Img variant={"top"} className={"card-item-img"}
                                src={require('../../img/IMG4.jpeg')} />
                             
                            <Card.Body className={"text-center"}>

                          
                 
                                <Card.Title ><h3 className={'text-weight'}>{room.roomType}</h3></Card.Title>
                                <Card.Subtitle className={"my-2"}><span>Charge: </span> LKR.{room.unitPrice}.00</Card.Subtitle>
                                <Card.Subtitle className={"my-2"}><span>Availability : </span>{room.availability}</Card.Subtitle>
                               
                                

                                <button className="btn-1" 
                                            onClick={(e)=>{this.ViewRoom(room.id)}}>View More...</button>

                            </Card.Body>

                        </Card>
                    )}

                </Row>
            </div>

                <br/>
                
            </div>


        );
    }


    
}

