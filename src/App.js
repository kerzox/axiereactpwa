import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CDB from '../services/CDB';
import { LineChart, Line } from 'recharts';
import { Link } from "react-router-dom";


// Pages

import Home from "/Home";


function App() {
  
  

  return (
    <Router id="image_background">
    <div className="App" id="image_background" >

        
        <ul>
            <li id="nav_logo"><img src="https://library.kissclipart.com/20180918/hkw/kissclipart-growth-transparent-background-icon-clipart-compute-bc96952ffedccf89.png" width="80" height="40" alt="Logo"></img></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Home">Stocks</Link></li>
            <li style={{ float: "right" }}><Link to="/Home">Login</Link></li>
            <li style={{ float: "right" }}><Link to="/Home">Register</Link></li>
        </ul>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/Stocks"><Stocks /></Route>
            <Route path="/Home"><Quote /></Route>
            <Route path="/Home"><Price_History /></Route>
            <Route path="/Home"><Register /></Route>
            <Route path="/Home"><Login /></Route>
           
        </Switch>
            </div>


</Router>
  );
}

export default App;
