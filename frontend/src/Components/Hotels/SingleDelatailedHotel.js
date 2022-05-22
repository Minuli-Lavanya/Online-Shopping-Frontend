import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './hotel.css'
import { faListAlt } from '@fortawesome/free-solid-svg-icons';


export default class SingleDetailedHotel extends Component {

    constructor(props) {
        super(props);

        this.state = {

            id:'',
            name:'',
            email:'',
            telNo:'',
            address:'',
            description:'',
            destination:'',
            
        };

    }



    componentDidMount(){
        //console.log(this.props.match.params.id);
        axios.get('http://localhost:8081/hotels/add/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    id:response.data.id,
                    name:response.data.name,
                    email:response.data.email,
                    telNo:response.data.telNo,
                    address:response.data.address,
                    description:response.data.description,
                    destination:response.data.destination

                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    
    render() {
        return(


            <div >

            <img
                className={"image-3"}
                src={require('../../img/IMG3.jpg')}
                alt="Image-Hotel"
             />
                <div className={"box-view"}>

                    <span id='heading2'>{this.state.name}</span>
                            

                    {/* <div className={"Text-view-2"}>
                        <section className={"Text-view-3"}> ID :hotel-ID_0{this.state.id}</section>
                        <section className={"Text-view-3"}> Hotel Name :{this.state.name}</section>
                        <section className={"Text-view-3"}> Email :{this.state.email}</section>                        
                        <section className={"Text-view-3"}> Tep :{this.state.telNo}</section>
                        <section className={"Text-view-3"}> Region : {this.state.destination}</section>
                        <section className={"Text-view-3"}> Address : {this.state.address}</section>
                        <section className={"Text-view-3"}> Description : {this.state.description}</section>
                        
                    
                    </div> */}

                    <table className={"Table-view"}>
                        <tr>
                            <td>ID</td>
                            <td>hotel-Id_0{this.state.id}</td>
                        </tr>
                        <tr>
                            <td>Hotel Name</td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td>Tep</td>
                            <td>{this.state.telNo}</td>
                        </tr>
                        <tr>
                            <td>Region</td>
                            <td>{this.state.destination}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{this.state.address}</td>
                        </tr>
                        <tr>
                            <td>description</td>
                            <td>{this.state.description}</td>
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

