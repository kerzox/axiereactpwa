import React, { Component } from 'react';
import CDB from '../services/CDB';
import { LineChart, Line } from 'recharts';


export default class Heat_map extends Component {
state= {
    the_datas: [], 
    the_data: [],
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
            const the_datas = response.data.rows;
            this.setState({ the_datas })

        })
        .catch(error => console.error(`Error: ${error}`))
}

getOneDoc(docid){

    // this will retrieve the headers of the contents, not the contents for each header
    CDB.get(`/a2_data/${docid}`, {
        responseType: 'json',
    })

        .then(response => {
            const the_data = response.data;
            this.setState({ the_data })
            console.log(the_data)

        })
        .catch(error => console.error(`Error: ${error}`))


    const d = Object.entries(this.state.the_data).map(([key, value]) => (
        <option key={key}>{key} - {value}</option>
    ));


    return (<div>{d}</div>)


}



render(){

    const mydoc  = this.getOneDoc();

    const renderLineChart = (
        <LineChart width={400} height={400} data={the_datas}>
            <Line type = "monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
    );


// This will make everything visible, if it's in here it can be seen on the page
    return( 
        <div>
            
            <ul id="docs">
                {this.state.the_datas.map((item) => 
                    <li key={item.id}>{item.id}
                        <button onClick={() => this.getOneDoc(item.id)}>Get more info</button>
                    </li>
                )}
            </ul>


            <select onChange={(selectedOption) => this.getOneDoc(selectedOption.target.value)}>
                    {this.state.the_datas.map((option) => (
                        <option key={option.id}>{option.id}</option>
                    ))}
            </select>

            {/* don't need html to return mydoc as there is html in the getonedoc function in the return statement*/ }
            {mydoc}

             {/*same case here, just rendering the linedoc of the data*/ }
            {renderLineChart}


            {/* import numpy as np
import numpy.random
import matplotlib.pyplot as plt

x = [1,3,4,5,3,4,2,2,4,5,3,2,5]
y = [3,4,5,1,2,3,4,5,1,2,3,4,5]

#x = [1,1,1,1,1,4,2,1,1,1,1]
#y = [1,1,1,1,2,1,1,1,4,4,1]


heatmap, xedges, yedges = np.histogram2d(x, y, bins=5)
extent = [xedges[0], xedges[-1], yedges[0], yedges[-1]]

plt.clf()
plt.imshow(heatmap.T, extent=extent, origin='lower', interpolation='nearest', cmap='hot')
plt.show()*/}



        </div>






    )
}


}
