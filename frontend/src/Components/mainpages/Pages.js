import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
// import OrderHistory from './history/OrderHistory'
// import OrderDetails from './history/OrderDetails'
// import Cart from './cart/Cart'
import OrderHistory from './history/OrderHistory'
import OrderHistory2 from './history/OrderHistory2'
import OrderDetails from './history/OrderDetails'
import OrderDetailsAdmin from './history/OrderDetailsAdmin'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import Summary from './productSummary/Summary'

import {GlobalState} from '../../GlobalState'

import Home from '../mainpages/home/home1'
import welcome from '../welcomepage/welcome'

import CheckoutForm from './cart/checkout/checkoutForm'
import PaymentForm from './cart/checkout/paymentForm'
import editDeliveryDetails from './cart/checkout/editDeliveryDetails'



function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>

            <Route path="/" exact component={Home} />

            <Route path="/welcome" exact component={welcome} />

            <Route path="/product" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/summary" exact component={isAdmin ? Summary : NotFound} />

            {/* <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/cart" exact component={Cart} /> */}
            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />
            <Route path="/history1" exact component={isLogged ? OrderHistory2 : NotFound} />
            <Route path="/history1/:id" exact component={isLogged ? OrderDetailsAdmin : NotFound} />

            <Route path="/cart" exact component={Cart} />
            <Route path="/checkout" exact component={CheckoutForm} />
            <Route path="/addpayment" exact component={PaymentForm} />
            <Route path="/deliveryupdate/:id" exact component={editDeliveryDetails} />


            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
