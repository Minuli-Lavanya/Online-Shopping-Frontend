import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Card, Form, Button, Container} from 'react-bootstrap';

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }else{
                    const res = await axios.get('/user/history', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page">
            <h2>Order List</h2>
            
            <h4>You have {history.length} orders</h4>
            <Button variant="primary" type="submit" style={{marginLeft:1000,marginTop:-90, background: "#24547c", width:150}}>Generate Report</Button>
            <table>
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Date of Purchased</th>
                        <th>View</th>
                        <th>Delivery Status</th>
                        {/* <th>Actions</th> */}

                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{items._id}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                <td><Link to={`/history/${items._id}`}>View</Link></td>
                                {/* <td><Button variant="primary" type="submit" style={{marginLeft:250, background: "#24547c", width:70}}>UPDATE</Button></td>
                                <td><Button variant="primary" type="submit" style={{marginLeft:250, background: "#24547c", width:70}}>DELETE</Button></td> */}


                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Button variant="primary" type="submit" style={{marginLeft:1000,marginTop:300, background: "#24547c", width:150}}>Deliver Order</Button>
        </div>
    )
}

export default OrderHistory
