import axios from 'axios';
import { encode } from 'js-base64';

//Using environmental variables embedded in React build
const cloudantDBURL = process.env.REACT_APP_CLOUDANT_URL
const username = process.env.REACT_APP_CLOUDANT_USERNAME
const password = process.env.REACT_APP_CLOUDANT_PASSWORD

//Base64 Encoded username password creates authkey

const authKeyEncode = encode(`${username}:${password}`)



export default axios.create({baseUrl: "https://c6b339ee-b547-4f06-a6f7-cf0c9abec3b2-bluemix.cloudantnosqldb.appdomain.cloud/", auth: {
    username: "apikey-v2-zn38fvzio9k56aa20mzk2xxik8qa048d9fxkg1dyax6",
    password: "6bee85a97fb4b46343a685876474a03a"
  }},
);





/*
axios.create({
    baseURL: `${cloudantDBURL}`,
    headers: {
        'Authorization': `Basic ${authKeyEncode}`
        //"Access-Control-Allow-Origin": "*",
         //"Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
         //"Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
       
    },

    //auth: {username: `${username}`, password: `${password}`}



});

*/