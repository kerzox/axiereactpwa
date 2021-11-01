import React, { Component } from 'react';
//import logo from './logo.svg';
import CDB from './CDB';
import './App.css';
//import { Link } from 'react-router';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,
	VerticalBarSeries,
	VerticalBarSeriesCanvas,
	LabelSeries, HeatmapSeries, MarkSeries} from 'react-vis';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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


class Bars extends Component {


    state = {
        a2_data: [],
        a2_datas: [], 
        selectedOption: null,
		userid: [],
		roomid: new Array(),
		timestamps: [],
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

				//this.state.room_data = make2DArray(a2_data.payload.d.userid.length, a2_data.payload.d.roomid.length)

                this.state.userid.push(a2_data.payload.d.userid)
				this.state.roomid.push(a2_data.payload.d.roomID)
				this.state.timestamps.push(a2_data.payload.timestamps)
            })
            .catch(error => console.error(`Error: ${error}`))

         
    
            
    };

	roomUsage(roomIds) {

		var percentage = []

		var times_visited = roomIds.length;
		var rooms = new Array() // number of rooms

		for (let i = 0; i < 2; i++) {
			rooms[i] = 0;
		}
	
		roomIds.forEach(x => { 
			console.log(x, times_visited)
			rooms[x-1] += 1;
		});

		percentage.push({
			x: `Room 1`, y: rooms[0]
		}, {
			x: `Room 2`, y: rooms[1]
		});

		return {percentage, times_visited};

	}

    render(){

		const BarSeries = VerticalBarSeries;

		var { roomid } = this.state

		var { percentage, times_visited} = this.roomUsage(roomid);

		var labels = []
		labels.push( 
			{x: `Room 1`, y: percentage[0].y + 1, label: `${(percentage[0].y / times_visited * 100).toFixed(2)}`, style: {fontSize: 10} }, {x: `Room 2`, y: percentage[0].y + 1, label: `${(percentage[1].y / times_visited * 100).toFixed(2)}`, style: {fontSize: 10} })


		return(
			<div>
				<h1>Page for Mark</h1>

				<div class="center">
                <div class="container">
					<h1>Room usage</h1>
					<XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
					<VerticalGridLines />
					<HorizontalGridLines />
					<XAxis />
					<YAxis />
					<LabelSeries data={labels} />
					<BarSeries className="vertical-bar-series-example" data={percentage} />
					</XYPlot>
				</div>
				</div>
			</div>
		);
	}




}


export default Bars;
