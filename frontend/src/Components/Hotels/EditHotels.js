import React, { Component } from 'react';
import axios from 'axios';
import './hotel.css'

export default class EditHotels extends Component {

    constructor(props) {
        super(props);


        this.state = {

            name:'',
            email:'',
            telNo:'',
            address:'',
            description:'',
            destination:''

        }

        

        this.onChangename = this.onChangename.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangetelNo = this.onChangetelNo.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangedestination = this.onChangedestination.bind(this);

        this.onSubmit = this.onSubmit.bind(this);



    }

    componentDidMount(){
        //console.log(this.props.match.params.id);
        axios.get('http://localhost:8081/hotels/add/' + this.props.match.params.id)
            .then(response =>{
                this.setState({

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

    onChangename(e){
        this.setState({name:e.target.value});
    }
    onChangeemail(e){
        this.setState({email:e.target.value});
    }
    onChangetelNo(e){
        this.setState({telNo:e.target.value});
    }
    onChangeaddress(e){
        this.setState({address:e.target.value});
    }
    onChangedescription(e){
        this.setState({description:e.target.value});
    }
    onChangedestination(e){
        this.setState({destination:e.target.value});
    }


    onSubmit(e){
        e.preventDefault();
        const obj = {
           
             
            name: this.state.name,
            email: this.state.email,
            telNo: this.state.telNo,
            address: this.state.address,
            description: this.state.description,
            destination: this.state.destination

        };

        axios.put("http://localhost:8081/hotels/add/"+this.props.match.params.id, obj)
        .then(res =>console.log(res.data),
        alert("Update Successfully"));

        this.props.history.push('/viewHotels');
    }





    render() {
        return(

            <div>

                <div id='sec1'>

                    <form onSubmit={this.onSubmit} id="form-hotels">

                        <br></br>
                        <span id='heading' style={{'marginLeft':'180px'}}>Update Hotel Details</span>
                        <br></br><br></br>

                        <div id='sec2'>

                            <div>
                                <label htmlFor="name" class="ftext">Hotel Name </label>
                                <input type="text" className="form-control" id="name" placeholder="" required
                                    value={this.state.name}
                                    onChange = {this.onChangename}   
                                />
                            </div>

                            <div>
                                <label htmlFor="busnumber" class="ftext">Email </label>
                                <input type="text" className="form-control" id="email" placeholder="" required
                                value={this.state.email}
                                onChange = {this.onChangeemail}  
                                />
                            </div>

                            <div>
                                <label htmlFor="from" class="ftext">Phone Number</label>
                                <input type="text" className="form-control" id="telNo"  placeholder="" required
                                value={this.state.telNo}
                                onChange = {this.onChangetelNo}
                                />
                            </div>

                            <div>
                                <label htmlFor="to" class="ftext">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="" required
                                value={this.state.address}
                                onChange = {this.onChangeaddress}
                                />
                            </div>

                            <div>
                                <label htmlFor="to" class="ftext">Description </label>
                                <input type="text" className="form-control" id="description" placeholder="" required
                                value={this.state.description}
                                onChange = {this.onChangedescription}
                                />
                            </div>

                            <div>
                                <label htmlFor="to" class="ftext">Region</label>
                                <input type="text" className="form-control" id="destination" placeholder="" required
                                value={this.state.destination}
                                onChange = {this.onChangedestination}
                                />
                            </div>

                        </div> 
                        
                        <button type="submit" id='edit-button'>Edit</button>
                        <br></br>
                    </form>

                </div>
            
            </div>
            
        )
    }
}