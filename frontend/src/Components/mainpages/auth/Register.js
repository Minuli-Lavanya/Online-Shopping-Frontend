import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Logo from '../../../images/amigos_logo1.png'
import Image2 from '../../../images/image2.jpg'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: '', role:1
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})

        // console.log(setUser({...user, role:0}))
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">


            <form onSubmit={registerSubmit}>
                <br></br>
                <p id="text1">WELCOME TO AMIGOS</p>
                <br></br>
                <h2 id="text5">Register</h2>
                <br></br>
                <br></br>
                <input type="text" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

            

                <div>
                    <button type="submit">Register</button>

                    <br></br>
                    <br></br>

                    <span id="text4">Do you have an account ? </span> &nbsp;&nbsp;

                    <Link to="/login">Login</Link>
                </div>
            </form>
            <div>
                <img src={Image2} id="login_image2"/>
            </div>

            <div>
                <img src={Logo} id="login_image"/>
            </div> 
           
        </div>
    )
}

export default Register