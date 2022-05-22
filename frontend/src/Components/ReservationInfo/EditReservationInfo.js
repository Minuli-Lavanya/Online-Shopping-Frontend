import React, { Component } from 'react';
import axios from 'axios';


export default class EditReservationInfo extends Component {

    constructor(props) {
        super(props);


        this.state = {
            
            roomType:'', 
            availability:'', 
            description:'', 
            unitPrice:'', 
            ac_nonAc:'',

           
        }


        this.onChangeroomType = this.onChangeroomType.bind(this);
        this.onChangeavailability = this.onChangeavailability.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangeunitPrice = this.onChangeunitPrice.bind(this);
        this.onChangeac_nonAc = this.onChangeac_nonAc.bind(this);
        

        this.onSubmit = this.onSubmit.bind(this);



    }

    componentDidMount(){
        //console.log(this.props.match.params.id);
        axios.get('http://localhost:8081/hotel/room/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

                    id:response.data.id,
                    roomType:response.data.roomType,
                    availability:response.data.availability,
                    description:response.data.description,
                    unitPrice:response.data.unitPrice,
                    ac_nonAc:response.data.ac_nonAc
                
                })
            })
            .catch(function(error){
                console.log(error)
            });
    }

    onChangeroomType(e){
        this.setState({roomType:e.target.value});
    }
    onChangeavailability(e){
        this.setState({availability:e.target.value});
    }
    onChangedescription(e){
        this.setState({description:e.target.value});
    }
    onChangeunitPrice(e){
        this.setState({unitPrice:e.target.value});
    }
    onChangeac_nonAc(e){
        this.setState({ac_nonAc:e.target.value});
    }
   


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
        
            roomType: this.state.roomType,
            availability: this.state.availability,
            description: this.state.description,
            unitPrice: this.state.unitPrice,
            ac_nonAc: this.state.ac_nonAc,
            
        };

        axios.put("http://localhost:8081/hotel/room/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/ViewResrvationsInfo');
    }





    render() {
        return(
            <div className="form-hotels">

            <br></br>
            <br></br>
            <h2 id="headertext">
                Update Room Details
            </h2>
            
            <div id='sec1'>
            

                <form onSubmit={this.onSubmit} id="form-rooms">

                        <br></br>
                        <span id='heading' style={{'textAlign':'center'}}>Room Details</span>
                        <br></br><br></br>

                    <div id='sec2'>

                        <div>
                            <label htmlFor="from" class="ftext">Room ID </label><br></br>
                            <input type="number" class="form-field" id="id" readOnly 
                            value={this.state.id}
                            
                            />
                        </div>

                        <div>
                            <label htmlFor="roomType">Room Type</label><br></br>
                            <select class="selections" id="roomType"  
                                value={this.state.roomType}
                                onChange = {this.onChangeroomType}
                            >
                                <option>Select Type</option>
                                <option value="Single-Room">Single Room</option>
                                <option value="Double-Room">Double Room</option>
                                <option value="Triple-Room">Triple Room</option>
                                <option value="Family-Room">Family Room</option>
                            </select>
                        </div>

                        

                        <div>
                            <label htmlFor="roomType">Availability</label><br></br>
                            <select class="selections" id="availability" 
                                value={this.state.availability}
                                onChange={this.onChangeavailability}
                            >
                                <option>Select Type</option>
                                <option value="Available">Available</option>
                                <option value="Not_Available">Not - Available</option>
                                
                            </select>
                        </div>


                        <div>
                            <label htmlFor="from" class="ftext">Charges </label><br></br>
                            <input type="number" class="form-field" id="unitPrice"  placeholder="" 
                            value={this.state.unitPrice}
                            onChange={this.onChangeunitPrice}
                            />
                        </div>

                        <div>
                            <label htmlFor="to" class="ftext">Description </label><br></br>
                            <input type="text" class="form-field" id="description" placeholder="" 
                              value={this.state.description}
                              onChange ={this.onChangedescription}
                            />
                        </div>


                        <div>
                            <label htmlFor="">Air Condition Type</label>
                            <select class="selections" id="ac_nonAc"  
                                value={this.state.ac_nonAc}
                                onChange={this.onChangeac_nonAc}
                            >
                                <option>Select Type</option>
                                <option value="A/C">A/C</option>
                                <option value="Non-A/C">Non-A/C</option>
                                
                            </select>
                        </div>


                    </div>

                    <button type="submit" className="btn btn-primary" >Update</button>
                </form><br></br>

            </div>




            </div>
            
        )
    }
}