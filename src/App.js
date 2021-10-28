import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> gooba gooba updated.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello this is a test
        </a>
        <ul>
            <li><Link to="/Home">React</Link></li>
        </ul>
      

      </header>
    </div>
  );
}

export default App;
