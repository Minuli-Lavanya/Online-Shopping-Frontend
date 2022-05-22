import React, {useState} from 'react';
import axios from "axios";

import {useHistory} from 'react-router-dom';



export default function AddReservationInfo() {



    const [roomType, setroomType] = useState("");
    const [availability, setavailability] = useState("");
    const [description, setdescription]  = useState("");
    const [unitPrice, setunitPrice] = useState("");
    const [ac_nonAc, setac_nonAc] = useState("");

    const history = useHistory();

    function sendData(e){
        e.preventDefault();

        const newRoom = { roomType, availability, description, unitPrice, ac_nonAc}

        axios.post("http://localhost:8081/hotel/room", newRoom).then(()=>{
            alert("New Hotel Details Added");

            history.push('/ViewResrvationsInfo');

        }).catch((err) =>{
            alert(err)
        })
    }


    return(

        <div>


            <div id='sec1'>
            

                <form onSubmit={sendData} id="form-rooms">

                        <br></br>
                        <span id='heading' style={{'textAlign':'center'}}>Room Details</span>
                        <br></br><br></br>

                    <div id='sec2'>
                        <div>
                            <label htmlFor="roomType">Room Type</label><br></br>
                            <select class="selections" id="roomType" required onChange = {(e) => {
                                    setroomType(e.target.value);
                                }}>
                                <option>Select Type</option>
                                <option value="Single-Room">Single Room</option>
                                <option value="Double-Room">Double Room</option>
                                <option value="Triple-Room">Triple Room</option>
                                <option value="Family-Rroom">Family Room</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="roomType">Availability</label><br></br>
                            <select class="selections" id="availability" required onChange = {(e) => {
                                    setavailability(e.target.value);
                                }}>
                                <option>Select Type</option>
                                <option value="Available">Available</option>
                                <option value="Not-Available">Not - Available</option>
                                
                            </select>
                        </div>


                        <div>
                            <label htmlFor="from" class="ftext">Charges </label><br></br>
                            <input type="number" class="form-field" id="unitPrice"  placeholder="" required
                            onChange = {(e) => {
                                setunitPrice(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Description </label><br></br>
                            <input type="text" class="form-field" id="description" placeholder="" required
                            onChange = {(e) => {
                                setdescription(e.target.value);
                            }}
                            />
                        </div>


                        <div>
                            <label htmlFor="roomtype">Air Condition Type</label>
                            <select class="selections" id="ac_nonAc" required onChange = {(e) => {
                                    setac_nonAc(e.target.value);
                                }}>
                                <option>Select Type</option>
                                <option value="A/C">A/C</option>
                                <option value="Non-A/C">Non-A/C</option>
                                
                            </select>
                        </div>


                    </div>

                    <button type="submit" id = "submit-button">Add</button>
                </form><br></br>

            </div>
          
            
        </div>
    )
}