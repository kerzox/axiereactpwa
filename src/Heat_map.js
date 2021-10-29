import React, { Component } from 'react';
import CDB from './CDB';
import { LineChart, Line } from 'recharts';


export default class Heat_map extends Component {

    
    state = {
        a2_data: [],
        a2_datas: [], 
        selectedOption: null

    }

    
// this function runs each time the page is loaded, runs the function below
componentDidMount(){
    this.getAllDocuments();
}

// retrieves items from the database
getAllDocuments(){

 // this will retrieve the headers of the contents, not the contents for each header
    CDB.get(`/a2_data/_all_docs`, {
        responseType: 'json',
    })

        .then(response => {
            const a2_datas = response.data.rows;
            this.setState({ a2_datas })

         })
        .catch(error => console.error(`Error: ${error}`))
}

getOneDoc(docid){

// this will retrieve the headers of the contents, not the contents for each header
    CDB.get(`/a2_data/${docid}`, {
          responseType: 'json',
    })

        .then(response => {
            const a2_data = response.data;
            this.setState({ a2_data })
            console.log(a2_data)

        })
        .catch(error => console.error(`Error: ${error}`))


    const d = Object.entries(this.state.a2_data).map(([key, value]) => (
        <option key={key}>{key} - {value}</option>
    ));


    return (<div>{d}</div>)


}





render(){

    const mydoc  = this.getOneDoc();

    const renderLineChart = (
        <LineChart width={400} height={400} data={a2_datas}>
            <Line type = "monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
    );


// This will make everything visible, if it's in here it can be seen on the page
  
}   


}
