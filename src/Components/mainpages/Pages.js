import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
//import Products from './products/Products'
//import DetailProduct from './detailProduct/DetailProduct'
//import Login from './auth/Login'
//import Register from './auth/Register'
import OrderHistory from './History/OrderHistory'
import OrderHistory2 from './History/OrderHistory2'
import OrderDetails from './History/OrderDetails'
import Cart from './Cart/Cart'
import NotFound from './Utils/not_found/NotFound'
//import Categories from './categories/Categories'
//import CreateProduct from './createProduct/CreateProduct'
import Paymentdetails from './Cart/Paymentdetails'
import PaymentDetails1 from './Cart/PaymentDetails1'

import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            {/* <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} /> */}

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history1" exact component={isLogged ? OrderHistory2 : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/cart" exact component={Cart} />
            <Route path="/addpayment" exact component={Paymentdetails} />
            <Route path="/addpayment2" exact component={PaymentDetails1} />


            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
