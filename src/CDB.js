import axios from 'axios';
import { encode } from 'js-base64';

//Using environmental variables embedded in React build
const cloudantDBURL = process.env.REACT_APP_CLOUDANT_URL
const username = process.env.REACT_APP_CLOUDANT_USERNAME
const password = process.env.REACT_APP_CLOUDANT_PASSWORD

//Base64 Encoded username password creates authkey

const authKeyEncode = encode(`${username}:${password}`)



export default axios.create({
    baseURL: `${cloudantDBURL}`,
    headers: {
        'Authorization': `Basic ${authKeyEncode}`,
         "Access-Control-Allow-Origin": "https://ai.qutproject.com",
         "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
         "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
         "https://c6b339ee-b547-4f06-a6f7-cf0c9abec3b2-bluemix.cloudantnosqldb.appdomain.cloud/a2_data/_all_docs": "200 OK"
    }


});