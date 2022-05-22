import React, {useState} from 'react';
import axios from "axios";
import '../Home/Home.css';
import {useHistory} from 'react-router-dom';


export default function AddTaxi() {


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [vehicleType, setvehicleType] = useState("");
    const [pcount, setpcount] = useState("");
    const [pick, setpick] = useState("");
    const [drop, setdrop] = useState("");

    const history = useHistory();


    function sendData(e){
        e.preventDefault();
        
        const newHotel ={

            name,
            email,
            vehicleType,
            pcount,
            pick, 
            drop

        }

        

        axios.post("http://localhost:8081/taxi", newHotel).then(()=>{
            alert("Taxi Added");
            history.push('/Hotel');

            
        }).catch((err)=>{
            alert(err)
        })

      

    }

    return(

        <div className="form_name">

                <br></br>
                <br></br>
                <h2 id="headertext">
                    Add Timetable
                </h2>

            <form onSubmit={sendData} id="form_name">
                

                <div className="row">
                    <label htmlFor="name" class="ftext">name : </label>
                    <input type="text" className="form-control" id="name" placeholder="" required
                     onChange = {(e) => {
                        setname(e.target.value);
                    }}   
                    />
                </div>

                <div className="row">
                    <label htmlFor="busnumber" class="ftext">Email : </label>
                    <input type="text" className="form-control" id="email" placeholder="" required
                     onChange = {(e) => {
                        setemail(e.target.value);
                    }}  
                    />
                </div>

                <div className="row">
                    <label htmlFor="from" class="ftext">Tel </label>
                    <input type="number" className="form-control" id="pcount"  placeholder="" required
                    onChange = {(e) => {
                        setpcount(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to" class="ftext">Vehicle Type </label>
                    <input type="text" className="form-control" id="vehicleType" placeholder="" required
                     onChange = {(e) => {
                        setvehicleType(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to" class="ftext">Pick : </label>
                    <input type="text" className="form-control" id="pick" placeholder="" required
                     onChange = {(e) => {
                        setpick(e.target.value);
                    }}
                    />
                </div>

                <div className="row">
                    <label htmlFor="to" class="ftext">Drop : </label>
                    <input type="text" className="form-control" id="drop" placeholder="" required
                     onChange = {(e) => {
                        setdrop(e.target.value);
                    }}
                    />
                </div>


                

                <button type="submit" id = "#">Add</button>
            </form>

           
            
        </div>
    )
}