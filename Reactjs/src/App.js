import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";
import { BrowserRouter, Switch, Route, NavLink,Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Order from "./components/order.component";
import PizzasList from "./components/pizza-list.component";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Registration from './views/Registration';
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/pizzas" className="navbar-brand">
            Menu
            </a>
          <div className="navbar-nav mr-auto">
         
            <li className="nav-item">
              <Link to={"/order"} className="nav-link">
                My cart
                </Link>
            </li>
          </div>
          <a href="/login" className="navbar-brand">
            Login
            </a>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/pizzas"]} component={PizzasList} />
            <Route exact path="/order" component={Order} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/registration" component={Registration} />


          </Switch>
        </div>
      </div>

    </BrowserRouter>
  
    
            
        
  );
}

export default App;
