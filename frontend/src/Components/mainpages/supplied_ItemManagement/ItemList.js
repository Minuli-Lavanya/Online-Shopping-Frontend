import React, {Component} from 'react';
import axios from 'axios';
import '../../../Styles/table.css'
import * as AiIcon from "react-icons/ai";


export default class ItemList extends Component {

    constructor(props){
        super(props);
        this.state = {item:[],
            searchId:''
        
        };

        this.addItem = this.addItem.bind(this);
        this.viewItem = this.viewItem.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.generatepdf = this.generatepdf.bind(this);
    }

    

    componentDidMount(){
        axios.get("http://localhost:8070/item/").then(response =>{
            this.setState({item:response.data})
        }).catch(function (error){
            console.log(error);
        })
    }

    addItem(){
        this.props.history.push('/itemadd');
    }

    updateSupplier(id){
        this.props.history.push(`/itemupdate/${id}`);
        // window.location = "/supupdate/"+id;
    }

    viewItem(id){
        this.props.history.push(`/itemList/${id}`);
    }

    // searchSupName(event){
    //     this.setState({ searchId: event.target.value.substr(0,
    //         20)});
    // }

    generatepdf(){
        this.props.history.push('/itemReport');
    }

    

    onDelete=(id) =>{
        var confirmtext;
        if(window.confirm("Are You Sure Want to Delete !")){
            axios.delete(`http://localhost:8070/item/delete/${id}`).then((res)=>{
                this.setState({item: this.state.item.filter(item => item.id !== id)});
                
            }) ;
            

        }
        else{
            this.props.history.push(`/`);
        }
    }
    



    render(){
        let filteritemName = this.state.item.filter((
            items)=>{
                return items.itemName.toLowerCase().indexOf(this.state.
                    searchId.toLowerCase())!==-1;
            }
        );
        
        return(

            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{marginLeft:295}}>Supplied Item Details</h2>
                </div>
                
                
                <div className = "form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:295}} placeholder="Enter Item Name" value={this.state.searchId} onChange={this.searchSupName.bind(this)}/>
                </div>                

                <div>
                    <button style={{marginLeft:1090,  background: "#072344"}} className = "btn btn-secondary" onClick={this.addItem}>Add Supplied Item Details</button>
                    <button style={{marginLeft:10, background: "#143957"}} className="btn btn-secondary" onClick={this.generatepdf} type='submit'>Generate Report</button>
                </div>   
                
                <br/>
                
                    <table className="attendtable">
                        <thead>
                            <tr>
                                
                                <th>Supplied Item ID</th>
                                <th>Supplier Name</th>
                                <th>Item Name</th>
                                <th>Purchased Date</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total Amount</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 filteritemName.map(
                                    items=>
                                
                                // this.state.item.map(
                                //     items =>
                                    <tr key = {items._id}>
                                        
                                        <td>{items.supItemId}</td>
                                        <td>{items.supName}</td>
                                        <td>{items.itemName}</td>
                                        <td>{items.purchasedDate}</td>
                                        <td>{items.quantity}</td>
                                        <td>{items.unitprice}.00</td>
                                        <td>{items.totalAmount}.00</td>
                                        <td>
                                            <button style={{background: "#1c3746"}} className="btn btn-secondary" onClick={(e)=>{this.updateSupplier(items._id)}}><AiIcon.AiOutlineEdit/></button>
                                            <button style={{background: "#24547c", marginLeft: "15px"}} className="btn btn-secondary" onClick={() =>this.onDelete(items._id)}><AiIcon.AiOutlineDelete/></button>
                                            <button style={{background: "#5494a4", marginLeft: "15px"}} className="btn btn-secondary" onClick={(e)=>{this.viewItem(items._id)}}><AiIcon.AiOutlineEye/></button>
                                            {/* <a className="btn btn-warning" href={`/itemList/${items._id}`}>
                                            &nbsp;Edit
                                            </a>  */}
                                        </td> 
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                
            </div>
        )
    }
    
}