import React, { Component } from 'react';
import CDB from './CDB';
import { LineChart, Line } from 'recharts';
import Chart from 'react-apexcharts'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, HeatmapSeries, MarkSeries} from 'react-vis';
import ScriptTag from 'react-script-tag';


const X_cord = [1,3,3,3,1,5,4,3,1,2,3,1,2,3,4,1,3,2,4,2,1,3,5,4,3,1,3,4,5,5,1,3,4,1,2,3,1]
const Y_cord = [1,3,3,3,1,4,2,3,4,4,1,4,3,4,5,2,1,3,1,4,5,1,2,3,4,1,2,3,4,1,2,4,1,4,5,2,1]


const te = [[1,3],[3,3],[4,3],[2,5],[3,3],[1,1],[3,2],[4,5],[3,1],[3,4]]


function make2DArray(rows, cols) {
	var arr = new Array(rows);
	for (var i = 0; i < arr.length; i++) {
	  arr[i] = new Array(cols);
	}

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            arr[i][j] = 0
        }
    }
	return arr;
  }


function sortData(x_cords, y_cords) {
    var data = {
        x: 0,
        y: 0,
        color: 0
    }

    var sorted = [];

    var count = make2DArray(6, 6)

    x_cords.forEach(x => {
        y_cords.forEach(y => {
            count[x][y] += 1
        });
    });

    x_cords.forEach(x => {
        y_cords.forEach(y => {
            sorted.push({
                x: x,
                y: y,
                color: count[x][y]
            })
        });
    });

    return sorted;
}

export default class Heat_map extends Component {



    state = {
        a2_data: [],
        a2_datas: [], 
        selectedOption: null,
        X_Coords: new Array(),
        Y_Coords: new Array(),
        heat_colours: null,

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

                for (var i = response.data.rows.length - 20; i < response.data.rows.length; i++) {
                    var xwda = a2_datas[i].id
                    this.getOneDoc(`${xwda}`);
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
                this.state.X_Coords.push(a2_data.payload.d.x_cord)
                this.state.Y_Coords.push(a2_data.payload.d.y_cord)



            })
            .catch(error => console.error(`Error: ${error}`))

         
    
            
    };

    render() {
        var { a2_datas, a2_data, X_Coords, Y_Coords, isLoaded } = this.state

           
        // This will make everything visible, if it's in here it can be seen on the page
        return( 

           
            <div>
            <h1>Heatmap of room</h1>

            {
   
            }

            <div class="center">
                <div class="container">
            <XYPlot
                width={300}
                 height={300}>
                <XAxis />
                <YAxis />
                <HeatmapSeries
                className="heatmap-series-example"
                colorRange={['red', 'yellow']}
                data={sortData(X_Coords, Y_Coords)}/>
            </XYPlot>
                </div>
            </div>
            </div>
        )

    }     
}


