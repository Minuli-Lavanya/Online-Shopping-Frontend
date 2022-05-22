import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import './Reservation.css'

export default function AddReservations() {

    const [tname, setname,] = useState("");
    const [temail, settemail,] = useState("");
    const [mobileNo, setmobileNo] = useState("");
    const [checkIn, setcheckIn] = useState("");
    const [checkOut, setcheckOut] = useState("");
    const [noOfAdult, setnoOfAdult] = useState("");
    const [noOfChild, setnoOfChild] = useState("");
    const [noOfRooms, setnoOfRooms] = useState("");
    const [roomType, setroomType] = useState("");
    
    
    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newReservation ={
    
            tname,
            temail,
            mobileNo,
            checkIn,
            checkOut,
            noOfAdult,
            noOfChild, 
            noOfRooms,
            roomType,
        }

        

        axios.post("http://localhost:8081/hotel/reservation", newReservation).then(()=>{
            alert("Details Added");
            history.push('/Reservations');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div >
            
            <div id='sec1'>

                <form onSubmit={sendData} id="form-reservation">

                    <br></br>
                    <span id='head' style={{'textAlign':'center'}}>Reservation Details</span>
                    <br></br><br></br><br></br>

                    <div id='sec2'>
                        <div>
                            <label htmlFor="tname" class="ftext">Name </label><br></br>
                            <input type="text"  id="tname" placeholder="" 
                                onChange = {(e) => {
                                    setname(e.target.value);
                                }}
                            />            
                        </div>

                            

                        <div>
                            <label htmlFor="temail" class="ftext">Email </label><br></br>
                            <input type="text"  id="temail" placeholder="" 
                                onChange = {(e) => {
                                    settemail(e.target.value);
                                }}
                            />
                                    
                        </div>

                        <div>
                            <label htmlFor="mobileNo">Phone Number</label><br></br>
                            <input type="number"  id="mobileNo" placeholder="mobileNo"  
                                onChange = {(e) => {
                                    setmobileNo(e.target.value);
                                }}
                            />
                                
                        </div>

                        <div>
                            <label htmlFor="checkIn">Check In</label><br></br>
                            <input type="date"  id="checkIn"  placeholder="checkIn" 
                                onChange = {(e) => {
                                    setcheckIn(e.target.value);
                                }} 
                            />
                                    
                        </div>

                        <div>
                            <label htmlFor="checkOut">Check Out</label><br></br>
                            <input type="date"  id="checkOut"  placeholder="checkOut" 
                                onChange = {(e) => {
                                    setcheckOut(e.target.value);
                                }}  
                            />        
                        </div>

                        <div>
                            <label htmlFor="noOfAdult">No of Adults</label><br></br>
                            <input type="text"  id="noOfAdult"  placeholder="noOfAdult"
                                onChange = {(e) => {
                                    setnoOfAdult(e.target.value);
                                }}  
                            />
                        </div>

                        <div>
                            <label htmlFor="noOfChild">No of Childern</label><br></br>
                            <input type="text"  id="noOfChild"  placeholder="noOfChild" 
                                onChange = {(e) => {
                                    setnoOfChild(e.target.value);
                                }} 
                            />            
                        </div>

                        <div>
                            <label htmlFor="noOfSroom">No of Rooms</label><br></br>
                            <input type="text"  id="noOfSroom"  placeholder="noOfSroom" 
                                onChange = {(e) => {
                                    setnoOfRooms(e.target.value);
                                }}
                            />
                         </div>


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


                    </div>



                        <button type="submit"  id = "submit-button">Add</button>
                </form>

            </div>

            
          
        </div>
    )
}