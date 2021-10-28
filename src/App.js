import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


// Pages

import Home from "./Home";
import Heat_map from "./Heat_map";
import Bars from "./Bars";
import Seyed from "./Seyed";


function App() {
  
  

  return (
    <Router id="image_background">
    <div className="App" id="image_background" >

        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Heatmap">Heat Map</Link></li>
            <li><Link to="/Bars">Statistics</Link></li>
            <li><Link to="/Seyed">Seyed Page (undetermined yet)</Link></li>
            
        </ul>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/Heatmap"><Heat_map /></Route>
            <Route path="/Bars"><Bars /></Route>
            <Route path="/Seyed"><Seyed /></Route>


            
           
        </Switch>
            </div>


</Router>
  );
}

export default App;
