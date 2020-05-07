import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {
    Cart,
    Product,
    CheckoutButton,
    cartLocalization,
    cartReducer,
    setCartCurrency
} from "react-shopping-cart";



class Order extends React.Component {


    render() {
        return (
            <h1>This is order</h1>
        )
    }
}

export default Order;