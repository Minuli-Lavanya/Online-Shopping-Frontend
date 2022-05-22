import React, {Component} from 'react';
import './Home.css';
import {Button, Carousel} from 'react-bootstrap';


export default class Home extends Component {
    state = {}

    render() {
        return (
            <div>

            <div id='home-sec1'>
                <span id='text1'>Welcome to</span><br></br>
                <span id='text2'>Luxury Hotels ... </span><br></br>
                <span id='text3'>Enjoy your Life ...</span>
            </div>

            
            <img
                className="image"
                src={require('../../img/hotelIMG.jpg')}
                alt="First slide"
             />
                        
                       
                  

                    
                        
                    
             

               


            </div>
        );
    }
}