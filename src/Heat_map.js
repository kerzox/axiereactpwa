import React, { Component } from 'react';
import CDB from './CDB';
import { LineChart, Line } from 'recharts';


export default class Heat_map extends Component {

    
    state = {
        a2_data: [],
        a2_datas: [], 
        selectedOption: null,
        Co_ords: []

    }

// this function runs each time the page is loaded, runs the function below
    componentDidMount(){
        this.getAllDocuments();
        console.log("getting all docs")
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
          <div><option key={a2_data.id}>{key} - {value}</option></div>  
        ));



        return (
        
        <div><h1>Note: the data takes a second to load</h1>{d}</div>
        )


    };

    render() {
        var { Co_ords, a2_datas, a2_data } = this.state
        const mydoc  = this.getOneDoc('007eb73fd5fbfa6ac5d5cdcc5e084c38');
        
      
        // This will make everything visible, if it's in here it can be seen on the page
        return( 
            <div>
                
                dwadawdwa
                


                {mydoc}



              
              
              {/*}  <ul id="docs">


                    {this.state.a2_datas.map((item) => 
                        <li key={item.id}>{item.id}
                            <button onClick={() => this.getOneDoc(item.id)}>Get more info</button>
                        </li>
                    )}


                </ul>

                <select onChange={(selectedOption) => this.getOneDoc(selectedOption.target.value)}>
                        {this.state.a2_datas.map((option) => (
                            <option key={option.id}>{option.id}</option>
                            
                        ))}
                </select>

                        */}

            {/* don't need html to return mydoc as there is html in the getonedoc function in the return statement*/ }


            



             {/*same case here, just rendering the linedoc of the data*/ }


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
