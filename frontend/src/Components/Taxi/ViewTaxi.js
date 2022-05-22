import React, {Component} from 'react';
import axios from "axios";
import {Table} from 'react-bootstrap';


export default class viewTaxi extends Component {
 

    constructor(props){
        super(props);
        this.state = {taxi: []};

        this.updateTaxi = this.updateTaxi.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    
    componentDidMount(){
        axios.get('http://localhost:8081/hotel/taxi').then(response=>{
            this.setState({taxi: response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate(){
        axios.get('http://localhost:8081/hotel/taxi').then(response =>{
            this.setState({taxi:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    updateTaxi(id){
        this.props.history.push(`/editTaxi/${id}`);
       
    }

    onDelete=(id) =>{
        if(window.confirm("Are You Sure Want to Delete !")){
            axios.delete(`http://localhost:8081/hotel/taxi/${id}`).then((res)=>{
                this.setState({taxi: this.state.taxi.filter(hotel => hotel.id !== id)});
                this.props.history.push('/ViewTaxi');
                
            }) ;
            

        }
        else{
            this.props.history.push(`/AddTAaxi`);
        }
    }


   
    
    render(){
        console.log("s", this.state.taxi);
        return (
            
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Taxi Details</h2>
                </div>
                


                
                <br/>
                
                    {/* <table className="table table-hover"> */}
                    <Table bordered hover size="sm" style={{width: "1150px", marginLeft: "300px", borderRadius: "12px", boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2)"}}>
                        <thead>
                            <tr>
                            <th colspan="6" scope="col" style={{fontSize: "1.3rem"}}>taxi</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                            
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Vehicle Type</th>
                            <th scope="col">No Of Passengers</th>
                            <th scope="col">Pick-Up Location</th>
                            <th scope="col">Drop</th>
                            
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 this.state.taxi.map((p)=>
                                
                                
                                    <tr key = {p.id}>
                                        
                                     <td>{p.name}</td>
                                     <td>{p.email}</td>
                                     <td>{p.vehicleType}</td>
                                     <td>{p.pcount}</td>
                                     <td>{p.pick}</td>
                                     <td>{p.drop}</td>
                                     
                                        
                                        <td>
                                            <button style={{background: "#1c3746", fontSize: ".84rem", borderRadius: "30px"}} className="btn btn-secondary" onClick={(e)=>{this.updateTaxi(p.id)}}> Edit</button>
                                            <button style={{background: "#f01c1c", marginLeft: "15px", fontSize: ".84rem", borderRadius: "30px"}} className="btn btn-secondary" onClick={() =>this.onDelete(p.id)}> Delete</button>
                                            
                                        </td> 
                                    </tr>
                                )
                            }
                        </tbody>


                    </Table>
                
            </div>


        );
    }


    
}

