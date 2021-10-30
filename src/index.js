import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import reportWebVitals from './reportWebVitals';


//const cors = require('cors');
//const corsOptions ={
  //  origin:'https://ai.qutproject.com', 
   // credentials:true,            //access-control-allow-credentials:true
   // optionSuccessStatus:200
//}
//app.use(cors(corsOptions));

cors = reqquire("cors");

const app = express();
app.use("*", cors());
//var cors = require('cors')
//app.use(cors()) // Use this after the variable declaration

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();