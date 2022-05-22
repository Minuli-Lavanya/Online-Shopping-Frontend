import React, {useState} from 'react';
import axios from "axios";
import "./hotel.css"
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom';
import { faLandmark, faLocationArrow, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
export default function AddHotels() {


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [description, setdescription] = useState("");
    const [telNo, settelNo] = useState("");
    const [destination, setdestination] = useState("");
    const [address, setaddress] = useState("");

    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newHotel ={

            name,
            email,
            description,
            telNo,
            destination, 
            address

        }

        

        axios.post("http://localhost:8081/hotels/add", newHotel).then(()=>{
            alert("New Hotel Details Added");
            history.push('/viewHotels');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div>

                
            <div id='sec1'>


                <form onSubmit={sendData} id="form-hotels">

                    <br></br>
                    <span id='heading' style={{'textAlign':'center'}}>Add Hotel Details</span>
                    <br></br><br></br>

                    <div id='sec2'>

                        <div>
                            <label htmlFor="name" class="ftext">Hotel Name </label>
                            <br></br>
                            <input type="text" class="form-field" id="name" placeholder="" required
                            onChange = {(e) => {
                                setname(e.target.value);
                            }}   
                            />
                        </div>

                        <div>
                            <label htmlFor="" class="ftext">Email Address  </label><br></br>
                            <input type="email"  id="email" class="form-field"  placeholder="" required
                            onChange = {(e) => {
                                setemail(e.target.value);
                            }}  
                            />
                        </div>

                        <div>
                            <label htmlFor="" class="ftext">Phone Number </label><br></br>
                            <input type="number"  id="telNo"  class="form-field"  placeholder="" required
                            onChange = {(e) => {
                                settelNo(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Description </label><br></br>
                            <input type="text"  id="description"  class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setdescription(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Region  </label><br></br>
                            <input type="text"  id="destination"  class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setdestination(e.target.value);
                            }}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Address  </label><br></br>
                            <input type="text"  id="address" class="form-field" placeholder="" required
                            onChange = {(e) => {
                                setaddress(e.target.value);
                            }}
                            />
                        </div>
                        <div>

                            <Link className="dropdown-item" to=""><FontAwesomeIcon
                            icon={faLocationArrow} className={"mr-2"}/> Add Location</Link>
                        </div>
                    </div><br></br>


                    <button type="submit" id = "submit-button">Add</button>
                </form>



            </div>
            
            
        </div>
    )
}