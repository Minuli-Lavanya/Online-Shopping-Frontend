import React, { Component } from 'react'
import axios from 'axios';
import { Card, Form, Button, Container } from 'react-bootstrap';

export default class supplierUpdate extends Component {


    constructor(props) {
        super(props);

        this.onChangeSupid = this.onChangeSupid.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            // suppliers:[],
            supplier_id: '',
            supplier_name: '',
            email: '',
            nic: '',
            phone_number: '',
            gender: ''

        };



    };

    componentDidMount(){
                axios.get('http://localhost:8070/supplier/get/' + this.props.match.params.id)
                    .then(response =>{
                        this.setState({
        
                            supplier_id:response.data.supplier.supplier_id,
                            supplier_name:response.data.supplier.supplier_name,
                            email:response.data.supplier.email,
                            nic:response.data.supplier.nic,
                            phone_number:response.data.supplier.phone_number,
                            gender:response.data.supplier.gender,
        
                        })
                    })
                    .catch(function(error){
                        console.log(error)
                    });
            }

    // async componentDidMount() {
    //     try {
    //         console.log(this.props.match.params.id)
    //         var result = await (await axios.get('http://localhost:8070/supplier/get/' + this.props.match.params.id)).data.data
    //         console.log(result[0])
    //         this.setState({suppliers:result[0]})
    //         // this.setState({
    //         //     supplier_id: result[0].supplier_id,
    //         //     supplier_name: result[0].supplier_name,
    //         //     email: result[0].supplier.email,
    //         //     nic: result[0].supplier.nic,
    //         //     phone_number: result[0].supplier.phone_number,
    //         //     gender: result[0].supplier.gender
    //         // })
    //         console.log("OK")
    //         console.log(this.state.supplier_id)
    //     } catch (err) {

    //     }

    // }

    onChangeSupid(e) {
        this.setState({ supplier_id: e.target.value });
    }
    onChangeName(e) {
        this.setState({ supplier_name: e.target.value });
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    onChangePhone(e) {
        this.setState({ phone_number: e.target.value });
    }
    onChangeNIC(e) {
        this.setState({ nic: e.target.value });
    }
    onChangeGender(e) {
        this.setState({ gender: e.target.value });
    }




    onSubmit(e) {
        e.preventDefault();
        const obj = {
            supplier_id: this.state.supplier_id,
            supplier_name: this.state.supplier_name,
            email: this.state.email,
            nic: this.state.nic,
            phone_number: this.state.phone_number,
            gender: this.state.gender

        };

        axios.put("http://localhost:8070/supplier/update/" + this.props.match.params.id, obj)
            .then(res => console.log(res.data),
                alert("Update Successfully"));

        this.props.history.push('/');
    }

    render() {


        return (

            <Container style={{ marginTop: 40 }}>
                <Card className={"col-md-6 offset-md-3 offset-md-3"} style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                    <Card.Header style={{ background: "#072344", color: "white" }}><center>Update Supplier Details</center></Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicid">
                                <Form.Label>Supplier ID</Form.Label>
                                <Form.Control type="text" placeholder="" id="supplier_id" pattern="[S][I][D][0-9][0-9][0-9][0-9]" required
                                    value={this.state.supplier_id}
                                    onChange={this.onChangeSupid} />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicname">
                                <Form.Label>Supplier Name</Form.Label>
                                <Form.Control type="text" id="supplier_name" required
                                    value={this.state.supplier_name}
                                    onChange={this.onChangeName} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicemail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="text"  id="email" pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$" required
                                    value={this.state.email}
                                    onChange={this.onChangeEmail} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicnic">
                                <Form.Label>NIC Number</Form.Label>
                                <Form.Control type="text" placeholder="" id="nic" required
                                    value={this.state.nic}
                                    onChange={this.onChangeNIC} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicno">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="phone" placeholder="" id="phone_number" pattern="[0-9]{10}" required maxLength="10"
                                    value={this.state.phone_number}
                                    onChange={this.onChangePhone} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicno">
                                <Form.Label>Gender</Form.Label>
                                <select className="form-control" id="gender" required
                                    value={this.state.gender}
                                    onChange={this.onChangeGender}>
                                    <option>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>

                                </select>

                            </Form.Group>



                            <Button variant="primary" type="submit" style={{ marginLeft: 250, background: "#072344" }}>Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        )

    }


}








// import React, { Component } from 'react';
// import axios from 'axios';

// export default class EditSupplier extends Component {

//     constructor(props) {
//         super(props);

        

//         this.onChangeSupplier_id = this.onChangeSupplier_id.bind(this);
//         this.onChangeSupplier_name = this.onChangeSupplier_name.bind(this);
//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangeNic = this.onChangeNic.bind(this);
//         this.onChangePhone_number = this.onChangePhone_number.bind(this);
//         this.onChangeGender = this.onChangeGender.bind(this);

//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {

//             supplier_id:'',
//             supplier_name:'',
//             email:'',
//             nic:'',
//             phone_number:'',
//             gender:''

//         };

//     }

//     componentDidMount(){
//         axios.get('http://localhost:8070/supplier/get/' + this.props.match.params.id)
//             .then(response =>{
//                 this.setState({

//                     supplier_id:response.data.supplier.supplier_id,
//                     supplier_name:response.data.supplier.supplier_name,
//                     email:response.data.supplier.email,
//                     nic:response.data.supplier.nic,
//                     phone_number:response.data.supplier.phone_number,
//                     gender:response.data.supplier.gender,

//                 })
//             })
//             .catch(function(error){
//                 console.log(error)
//             });
//     }

//     onChangeSupplier_id(e){
//         this.setState({supplier_id:e.target.value});
//     }
//     onChangeSupplier_name(e){
//         this.setState({supplier_name:e.target.value});
//     }
//     onChangeEmail(e){
//         this.setState({email:e.target.value});
//     }
//     onChangeNic(e){
//         this.setState({nic:e.target.value});
//     }
//     onChangePhone_number(e){
//         this.setState({phone_number:e.target.value});
//     }
//     onChangeGender(e){
//         this.setState({gender:e.target.value});
//     }


//     onSubmit(e){
//         e.preventDefault();
//         const obj = {
           
             
//             supplier_id: this.state.supplier_id,
//             supplier_name: this.state.supplier_name,
//             email: this.state.email,
//             nic: this.state.nic,
//             phone_number: this.state.phone_number,
//             gender: this.state.gender,

//         };

//         axios.put("http://localhost:8070/supplier/update/"+this.props.match.params.id, obj)
//         .then(res =>console.log(res.data),
//         alert("Update Successfully"));

//         this.props.history.push('/viewSupplier');
//     }





//     render() {
//         return(
//             <div className="box2">
//             <div className="container" style={{marginTop:"1cm",width:"20cm",border: "1px solid black",marginBottom:"2cm", background: "rgba(255,255,255,0.838)", fontSize:"13px", borderRadius:"10px"}}>
//              <br/>
//             <form onSubmit={this.onSubmit}>

//             <h2 style={{'textAlign':'center'}}>
//                         Update Supplier Details
//                     </h2>

//                     <div className="form-group" required>
//                         <label htmlFor="name">supplier name</label>
//                         <input type="text" className="form-control" id="supplier_id" placeholder=""
//                           value={this.state.supplier_id}
//                           onChange = {this.onChangeSupplier_id}
//                         />
//                     </div>

//                     <div className="form-group" required>
//                         <label htmlFor="itemname">suppire name</label>
//                         <input type="text" className="form-control" id="supplier_name" placeholder=""
//                          value={this.state.supplier_name}
//                          onChange = {this.onChangeSupplier_name}
//                         />
//                     </div>

//                     <div className="form-group" required>
//                         <label htmlFor="supid">Email : </label>
//                         <input type="text" className="form-control" id="email"  placeholder="" 
//                             value={this.state.email}
//                             onChange = {this.onChangeEmail}
//                         />
//                     </div>


//                     <div className="form-group" required>
//                         <label htmlFor="unitprice">Nic </label>
//                         <input type="text" className="form-control" id="nic" 
//                             value={this.state.nic}
//                             onChange = {this.onChangeNic}
                         
//                         />
//                     </div>

//                     <div className="form-group" required>
//                         <label htmlFor="qty">Phone Number</label>
//                         <input type="text" className="form-control" id="phone_number" 
//                             value={this.state.phone_number}
//                             onChange = { this.onChangePhone_number}
//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="category">Gender</label>
//                         <select className="form-control" id="gender" placeholder="" required
//                             value={this.state.gender}
//                             onChange = {this.onChangeGender}
//                         >
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
                            
//                         </select>
//                     </div>

    
//                 <button type="submit" className="btn btn-primary" style={{marginLeft: "8cm", width: "3cm"}}>Submit</button>
//                 <br/><br/>
//             </form>
//             </div>
//             </div>
//         )
//     }
// }













// import React, { Component } from 'react';
// import axios from 'axios';

// export default class supplierUpdate extends Component {

//     constructor(props) {
//         super(props);



//         this.onChangeSupid = this.onChangeSupid.bind(this);
//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangePhone = this.onChangePhone.bind(this);
//         this.onChangeNIC = this.onChangeNIC.bind(this);
//         this.onChangeGender = this.onChangeGender.bind(this);
//         this.onSubmit=this.onSubmit.bind(this);



//         this.state = {
//                 supplier_id:'',
//                 supplier_name:'',
//                 email:'',
//                 nic:'',
//                 phone_number:'',
//                 gender:''

//             };

//     }

//     componentDidMount(){
//         axios.get('http://localhost:8070/supplier/get/' + this.props.match.params.id)
//             .then(response =>{
//                 this.setState({

//                     supplier_id: response.data.supplier_id,
//                     supplier_name: response.data.supplier_name,
//                     email: response.data.supplier.email,
//                     nic: response.data.supplier.nic,
//                     phone_number: response.data.supplier.phone_number,
//                     gender: response.data.supplier.gender

//                 })
//             })
//             .catch(function(error){
//                 console.log(error)
//             });
//     }

//     onChangeSupid(e){
//         this.setState({supid:e.target.value});
//     }
//     onChangeName(e){
//         this.setState({name:e.target.value});
//     }
//     onChangeEmail(e){
//         this.setState({email:e.target.value});
//     }
//     onChangePhone(e){
//         this.setState({phone_number:e.target.value});
//     }
//     onChangeNIC(e){
//         this.setState({nic:e.target.value});
//     }
//     onChangeGender(e){
//         this.setState({gender:e.target.value});
//     }


//     onSubmit(e){
//         e.preventDefault();
//         const obj = {


//             supplier_id: this.state.supplier_id,
//             supplier_name: this.state.supplier_name,
//             email: this.state.email,
//             nic: this.state.nic,
//             phone_number: this.state.phone_number,
//             gender: this.state.gender

//         };

//         axios.put("http://localhost:8070/supplier/update/" + this.props.match.params.id, obj)
//         .then(res =>console.log(res.data),
//         alert("Update Successfully"));

//         this.props.history.push('/');
//     }





//     render() {
//         return(
//             <div className="box2">
//             <div className="container" style={{marginTop:"1cm",width:"20cm",border: "1px solid black",marginBottom:"2cm", background: "rgba(255,255,255,0.838)", fontSize:"13px", borderRadius:"10px"}}>
//              <br/>
//             <form onSubmit={this.onSubmit}>

//             <h2 style={{'textAlign':'center'}}>
//                         Update Route Details
//                     </h2>

//                     <div className="form-group" required>
//                         <label htmlFor="name">Route Name</label>
//                         <input type="text" className="form-control" id="supplier_id" placeholder=""
//                           value={this.state.supplier_id}
//                           onChange = {this.onChangeSupid}
//                         />
//                     </div>

//                     <div className="form-group" required>
//                         <label htmlFor="itemname">Bus Number :</label>
//                         <input type="text" className="form-control" id="supplier_name" placeholder=""
//                         value={this.state.supplier_name}
//                         onChange = {this.onChangeName}
//                         />
//                     </div>

//                     <div className="form-group" required>
//                         <label htmlFor="supid">Route From : </label>
//                         <input type="text" className="form-control" id="email"  placeholder="" 
//                             value={this.state.email}
//                             onChange = {this.onChangeEmail}
//                             onChange = {this.onChangeRoute_from}
//                         />
//                     </div>


//                     <div className="form-group" required>
//                         <label htmlFor="unitprice">Route To : </label>
//                         <input type="text" className="form-control" id="nic" 
//                             value={this.state.nic}
//                             onChange = {this.onChangeNIC}

//                         />
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="category">Supplier Type</label>
//                         <select className="form-control" id="gender"  required
//                             value={this.state.gender}
//                             onChange = {this.onChangeGender}
//                         >
//                             <option>Select Gender</option>
//                             <option value="Male">Male</option>
//                             <option value="Female">Female</option>
//                         </select>
//                     </div>



//                 <button type="submit" className="btn btn-primary" style={{marginLeft: "8cm", width: "3cm"}}>Submit</button>
//                 <br/><br/>
//             </form>
//             </div>
//             </div>
//         )
//     }
// }