import React, {Component} from 'react';
import axios from "axios";
import {Button, Card, Row} from 'react-bootstrap';
import './hotel.css'

export default class HotelDetails extends Component {
 

    constructor(props){
        super(props);
        this.state = {hotel: []};

        this.ViewHotel = this.ViewHotel.bind(this);
    }

    
    componentDidMount(){
        axios.get('http://localhost:8081/hotels/add').then(response=>{
            this.setState({hotel: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    ViewHotel(id){
        this.props.history.push(`/SingleDetailedHotel/${id}`);
       
    }

    
    render(){
        console.log("s", this.state.hotel);
        return (
            
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Hotel Details</h2>
                </div>

                <div>
                <Row className="justify-content-md-center">
                    {this.state.hotel.slice(0,this.state.visible).map(hotel =>

                        <Card style={{width: '21rem', border:'none'}} className={"name"} key={hotel.id}>

                            <Card.Img variant={"top"} className={"card-item-img"}
                                src={require('../../img/IMG2.jpg')} />
                             
                            <Card.Body className={"text-center"}>

                          
                 
                                <Card.Title ><h3 className={'text-weight'}>{hotel.name}</h3></Card.Title>
                                <Card.Subtitle className={"my-2"}><span>Region : </span>{hotel.destination}</Card.Subtitle>
                                <Card.Subtitle className={"my-2"}><span>Tp : </span>{hotel.telNo}</Card.Subtitle>
                               
                                

                                <button className="btn-1" 
                                            onClick={(e)=>{this.ViewHotel(hotel.id)}}>View More...</button>

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

