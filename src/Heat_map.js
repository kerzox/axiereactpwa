import React, { Component } from 'react';
import CDB from './CDB';
import { LineChart, Line } from 'recharts';
import Chart from 'react-apexcharts'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, HeatmapSeries, MarkSeries} from 'react-vis';
import ScriptTag from 'react-script-tag';


const X_cord = [1,3,3,3,1,5,4,3,1,2,3,1,2,3,4,1,3,2,4,2,1,3,5,4,3,1,3,4,5,5,1,3,4,1,2,3,1]
const Y_cord = [1,3,3,3,1,4,2,3,4,4,1,4,3,4,5,2,1,3,1,4,5,1,2,3,4,1,2,3,4,1,2,4,1,4,5,2,1]


const te = [[1,3],[3,3],[4,3],[2,5],[3,3],[1,1],[3,2],[4,5],[3,1],[3,4]]




export default class Heat_map extends Component {



    state = {
        a2_data: [],
        a2_datas: [], 
        selectedOption: null,
        X_Coords: new Array(),
        Y_Coords: new Array(),


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
        CDB.get(`https://c6b339ee-b547-4f06-a6f7-cf0c9abec3b2-bluemix.cloudantnosqldb.appdomain.cloud/a2_data/_all_docs`, {
            responseType: 'json'
        })

            .then(response => {
                const a2_datas = response.data.rows;
                this.setState({ a2_datas })




                for (var i = 0; i < 20; i++) {
                    var xwda = a2_datas[i].id
                    this.getOneDoc(`${xwda}`)

                  
                };

           

             })

            .catch(error => console.error(`Error: ${error}`))

    }

  





    getOneDoc = (docid) => {

        // this will retrieve the headers of the contents, not the contents for each header
        CDB.get(`https://c6b339ee-b547-4f06-a6f7-cf0c9abec3b2-bluemix.cloudantnosqldb.appdomain.cloud/a2_data/${docid}`, {
              responseType: 'json',
        })

            .then(response => {
                const a2_data = response.data;
                this.setState({ a2_data })
                //this.X_Coords.push(a2_data.payload.d.x_cord)
                //this.Y_Coords.push(a2_data.payload.d.y_cord)
                //console.log("got one doc", this.X_Coords, ' ', this.Y_Coords )


            })
            .catch(error => console.error(`Error: ${error}`))

         
    
            
    };

   
    


    render() {
        var { a2_datas, a2_data, X_Coords, Y_Coords, isLoaded } = this.state
       
        
        // This will make everything visible, if it's in here it can be seen on the page
        return( 

           
            <div>
            <h1>Heatmap of room</h1>

            {//This following code makes it possible to make a heatmap 
            
            }


            <ScriptTag isHydrating={true} type="text/javascript" src= "https://cdn.anychart.com/releases/8.7.1/js/anychart-core.min.js" />
            <ScriptTag isHydrating={true} type="text/javascript" src= "https://cdn.anychart.com/releases/8.7.1/js/anychart-heatmap.min.js" />

            


            <XYPlot
                width={300}
                 height={300}>
                <XAxis />
                <YAxis />
                <HeatmapSeries
                className="heatmap-series-example"
                colorRange={['red', 'blue']}
                data={[
                    {x: X_cord[0], y: Y_cord[0], color:3},
                    {x: X_cord[1], y: Y_cord[1], color:2},
                    {x: X_cord[2], y: Y_cord[2], color:1},
                    {x: X_cord[3], y: Y_cord[3], color:4},
                    {x: X_cord[4], y: Y_cord[4], color:1},
                    {x: X_cord[5], y: Y_cord[5], color:2},
                    {x: X_cord[6], y: Y_cord[6], color:5},
                    {x: X_cord[7], y: Y_cord[7], color:4},
                    {x: X_cord[8], y: Y_cord[8], color:2},
                    {x: X_cord[9], y: Y_cord[9], color:1},
                    {x: X_cord[10], y: Y_cord[10], color:3},
                    {x: X_cord[11], y: Y_cord[11], color:4},
                    {x: X_cord[12], y: Y_cord[12], color:4},                    
                    {x: X_cord[13], y: Y_cord[13], color:1},
                    {x: X_cord[14], y: Y_cord[14], color:3},
                    {x: X_cord[15], y: Y_cord[15], color:4},
                    {x: X_cord[16], y: Y_cord[16], color:4},
                    {x: X_cord[17], y: Y_cord[18], color:4},
                    {x: X_cord[18], y: Y_cord[18], color:2},
                    {x: X_cord[19], y: Y_cord[19], color:5},
                    {x: X_cord[20], y: Y_cord[20], color:5},
                    {x: X_cord[21], y: Y_cord[21], color:1},
                    {x: X_cord[22], y: Y_cord[22], color:3},
                    {x: X_cord[23], y: Y_cord[23], color:1},
                    {x: X_cord[24], y: Y_cord[24], color:1},
                    {x: X_cord[25], y: Y_cord[25], color:4},
                    {x: X_cord[26], y: Y_cord[26], color:5},
                    {x: X_cord[27], y: Y_cord[27], color:2},
                    {x: X_cord[28], y: Y_cord[28], color:5},
                    {x: X_cord[29], y: Y_cord[29], color:3},
                    

                  ]}/>
            </XYPlot>
           


            </div>
        )
    }     
}


