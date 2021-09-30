import React, {useContext, useState} from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import logo from '../../../images/amigos_logo1.png'
import homeimg1 from '../../../images/homeimg2.jpg'




// hpme page
export default function Index() {

    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged

 

    return (
        <>
        { !isLogged ?
        <>

            <section>
                <div>
                  
                </div>
            </section>

            <section id="hero">

                <div id="left">

                    <div id="main_title">
                        Welcome to Amigos
                    </div>

                    <div id="sub_title">
                    Shopping the way you like it...
                    </div>

                    <Link to="/login">                       
                        <button id="login_btn">
                            LOGIN NOW
                        </button>
                    </Link>

                </div>

                <div id="right">
                    <img src={homeimg1} alt="" id="hotel_img" />
                </div>

            </section>

            {/* <section id="hero">

                <div id="left">
                    <img src="https://images.squarespace-cdn.com/content/v1/5194e013e4b0af15cc428efc/1508837559326-C5BKLAI6N6PG0OG9PHII/ke17ZwdGBToddI8pDm48kDwXQcn-xoLRguHXGA2fZFJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIw5TS1M25-hsTokYEygGwPdOCtuACZcN3tBEqGWTBNnwKMshLAGzx4R3EDFOm1kBS/Bannister+food+pic.jpg" alt="" id="hotel_img" />    
                </div>

                <div id="right">

                    <div id="main_title">
                       Explore our delicious foods 
                    </div>

                    <div id="sub_title">
                        Follow your nose , it always Knows.
                    </div>

                    <Link to="#">  
                        <button id="login_btn">
                            explore now
                        </button>
                    </Link>

                </div>
            </section> */}

            <section id="footer">
               <div id="f_items">
                    <img src={logo} alt=""  id="logo" /> 
                    <div id="buttons">

                        <Link to="/product">
                            <button id="l_btn">SHOP</button>
                        </Link>

                        <Link to="/login">
                            <button id="r_btn">LOGIN | REGISTER</button>
                        </Link>

                    </div>

                    <div id="date">
                        {new Date().getFullYear()} &#xa9; Amigos Shopping Center

                        <div id="address">
                            137 Sir James Pieris Mawatha, Colombo 2
                        </div>
                    </div>
                    
               </div>

               
            </section>
        </>:<>
       
        </>
    }
    </>
    )
}