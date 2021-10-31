import React, { Component } from 'react';
import CDB from './CDB';
import { LineChart, Line } from 'recharts';
import Chart from 'react-apexcharts'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, HeatmapSeries, MarkSeries} from 'react-vis';


const dummyx = [1,3,2,1,3,5,4,3,1,2,3,1,2,3,4,1,3,2,4,2,1,3,5,4,3,1,3,4,5,5,1,3,4,1,2,3,1]
const dummyy = [1,3,4,3,5,4,2,3,4,4,1,4,3,4,5,2,1,3,1,4,5,1,2,3,4,1,2,3,4,1,2,4,1,4,5,2,1]
const te = [[1,3],[3,3],[4,3],[2,5],[3,3],[1,1],[3,2],[4,5],[3,1],[3,4]]
export default class Heat_map extends Component {



    state = {
        a2_data: [],
        a2_datas: [], 
        selectedOption: null,
        X_Coords: [],
        Y_Coords: [],
        isLoaded: false,


        options: {
            chart: {
              height: 350,
              type: 'heatmap',
            },
            dataLabels: {
              enabled: false
            },
            colors: ["#008FFB"],
            title: {
              text: 'HeatMap Chart (Single color)'
            },
          },


        series: [{
            name: 'X_data',
            data: te
          },
          {
            name: 'Y_data',
            data: dummyy
        }
    ],
    }


    

// this function runs each time the page is loaded, runs the function below
    componentDidMount(){

        // function that runs all doc names then gets the coords with each doc
        console.log("before getting all docs")
        this.getAllDocuments();
    } 

// retrieves items from the database
    getAllDocuments = () =>{

        console.log("getting all docs now ")
     // this will retrieve the headers of the contents, not the contents for each header
        CDB.get(`/a2_data/_all_docs`, {
            responseType: 'json',
        })

            .then(response => {
                const a2_datas = response.data.rows;
                this.setState({ a2_datas })
                //console.log("the data", a2_datas[0])
                //console.log("the data", a2_datas[1])
                //console.log("the data", a2_datas[2])
                //console.log("the data", a2_datas[3000])

                
                for (var i = 0; i < 25; i++) {
                    var xwda = a2_datas[i].id
                    this.getOneDoc(`${xwda}`)
                    //console.log("the id ", `${xwda}`)
                //    console.log('run retrieval')
                };


             })

            .catch(error => console.error(`Error: ${error}`))

    }

    getOneDoc = (docid) => {

        // this will retrieve the headers of the contents, not the contents for each header
        CDB.get(`/a2_data/${docid}`, {
              responseType: 'json',
        })

            .then(response => {
                const a2_data = response.data;
                this.setState({ a2_data })
                console.log("got one doc", a2_data.payload.d.x_cord, ' ', a2_data.payload.d.y_cord )
               // this.X_Coords.push(a2_data.payload.d.x_cord)
                //this.Y_Coords.push(a2_data.payload.d.y_cord)
                //console.log("retrieved ", this.a2_data.payload.d.x_cord)
                

            })
            .catch(error => console.error(`Error: ${error}`))

           // const d = Object.entries(this.state.a2_data).map(([key, value]) => (
           ////     <option key={key}>{key} - {value}</option>
           // ));
    
           // return (<div>{d}</div>)
    
            
    };

   // ${this.a2_datas[i].id}

   /*
    get_all_cords = () => {

        console.log("get all logs")
        this.getAllDocuments(()=>{
            console.log("I have finished");
        });
        console.log("finished getting all logs")


        console.log("retrieving coords")
        console.log("a variable ", this.state.a2_datas[0])


        //console.log(this.a2_datas.length)
        for (var i = 0; i < 3; i++) {
            this.getOneDoc("007eb73fd5fbfa6ac5d5cdcc5e03d90c")
            console.log('run')
        };

        console.log("all coords retrieved I hope")
    };

    */
    


    render() {
        var { a2_datas, a2_data, X_Coords, Y_Coords, isLoaded } = this.state
       
       // if(!isLoaded){
       //     console.log('calling the function')
        //    this.get_all_cords();
        //    this.isLoaded = true;
       // }

        //else{
//
        //    console.log('its positive')
       // }


        // This will make everything visible, if it's in here it can be seen on the page
        return( 



            <div>
            Yaddayada dwadaw

            {dummyx}
            {dummyy}

            <div id="chart">
            <Chart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
            </div>


            <XYPlot
                width={300}
                 height={300}>
                <XAxis />
                <YAxis />
                <MarkSeries
                className="heatmap-series-example"
                data={[
                    {x: dummyx[0], y: dummyy[0]},
                    {x: dummyx[1], y: dummyy[1]},
                    {x: dummyx[2], y: dummyy[2]},
                    {x: dummyx[3], y: dummyy[3]},
                    {x: dummyx[4], y: dummyy[4]},
                    {x: dummyx[5], y: dummyy[5]},
                    {x: dummyx[6], y: dummyy[6]},
                    {x: dummyx[7], y: dummyy[7]},
                    {x: dummyx[8], y: dummyy[8]},
                    {x: dummyx[9], y: dummyy[9]},
                    {x: dummyx[10], y: dummyy[10]},
                    {x: dummyx[11], y: dummyy[11]},
                    {x: dummyx[12], y: dummyy[12]},
                    {x: dummyx[13], y: dummyy[13]},
                    {x: dummyx[14], y: dummyy[14]},
                    {x: dummyx[15], y: dummyy[15]},
                    {x: dummyx[16], y: dummyy[16]},
                    {x: dummyx[17], y: dummyy[18]},
                    {x: dummyx[18], y: dummyy[18]},
                    {x: dummyx[19], y: dummyy[19]},
                    {x: dummyx[20], y: dummyy[20]},
                    {x: dummyx[21], y: dummyy[21]},
                    {x: dummyx[22], y: dummyy[22]},
                    {x: dummyx[23], y: dummyy[23]},
                    {x: dummyx[24], y: dummyy[24]},
                    {x: dummyx[25], y: dummyy[25]},
                    {x: dummyx[26], y: dummyy[26]},
                    {x: dummyx[27], y: dummyy[27]},
                    {x: dummyx[28], y: dummyy[28]},
                    {x: dummyx[29], y: dummyy[29]},

                  
                    
                    

                  ]}/>
            </XYPlot>
            {/*
                <ul id="docs">
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


