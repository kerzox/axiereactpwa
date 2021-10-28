import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Link } from 'react-router';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Home extends Component {

    render(){
		return(
			<div>
				<h1>Another page</h1>
				<button type="button">Change value</button>
                <ul>
                    <li><Link to="/App">React</Link></li>
                </ul>
			</div>
		);
	}




}


export default Home;
