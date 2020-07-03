import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CovidTracker.css'



function CovidTracker() {
    const [posts, setPosts] = useState({})
    const [total, setTotal] = useState({})

    useEffect(() => {
        axios
            .get(`https://api.covidindiatracker.com/state_data.json`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios
            .get(`https://api.covidindiatracker.com/total.json`)
            .then(response => {
                console.log(response)
                setTotal(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div
            style={{
                // background: 'white',
                padding: '5%',
                fontFamily: '"Arial", Monaco, monospace',
                alignSelf:'center'
            }} className = "bg"><center><h1 className = "h1"
            style={{
                color: '',
                // padding: '1rem',
                display: 'inline-block',
                fontFamily: 'Algerian',
            }}>COVID-19 TRACKER</h1></center>

            <div>
                <table className='box1'>
                    <thead>
                        <tr className='content'>
                            <th>ACTIVE</th>
                            <th>CONFIRMED</th>
                            <th>RECOVERED</th>
                            <th>DEATHS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={total.id}>
                            <td class='counter' data-target="0">{total.active}</td>
                            <td >{total.confirmed}</td>
                            <td >{total.recovered}</td>
                            <td >{total.deaths}</td>
                        </tr>
                    </tbody>
                </table>

                {/*
                componentDidMount(){
  var chart = this.chart;
  var options = this.options;
  chart.options = newVSReturningVisitorsOptions;
  chart.options.data = options["New vs Returning Visitors"];
  chart.render();

  $("#backButton").click(function () {
    $(this).toggleClass("invisible");
    chart.options = newVSReturningVisitorsOptions;
    chart.options.data = options["New vs Returning Visitors"];
    chart.render();
  });
}

                
                constructor() {
    super();
    this.options = {};
    this.visitorsChartDrilldownHandler = this.visitorsChartDrilldownHandler.bind(this);
  }

  visitorsChartDrilldownHandler(e) {
    var chart = this.chart;
    chart.options = visitorsDrilldownedChartOptions;
    chart.options.data = this.options[e.dataPoint.name];
    chart.options.title = { text: e.dataPoint.name };
    chart.render();
    $("#backButton").toggleClass("invisible");
  }


  render() {
    this.options = {
      "New vs Returning Visitors": [{
        click: this.visitorsChartDrilldownHandler,
        cursor: "pointer",
        explodeOnClick: false,
        innerRadius: "75%",
        legendMarkerType: "square",
        name: "New vs Returning Visitors",
        radius: "100%",
        showInLegend: true,
        startAngle: 90,
        type: "doughnut",
        dataPoints: [
          { y: 522460, name: "Active", color: "red" },
          { y: 307040, name: "Confirmed", color: "orange" },
          { y: 307040, name: "Deaths", color: "blue" },
          { y: 307040, name: "Recovered", color: "green" }
        ]
      }],
      "Active": [{
        color: "red",
        name: "Active",
        type: "column",
        dataPoints: [
          { x: new Date("1 Jan 2017"), y: 37000 },
        ]
      }],
      "Confirmed": [{
        color: "orange",
        name: "Confirmed",
        type: "column",
        dataPoints: [
          { x: new Date("1 Jan 2017"), y: 19000 },
        ]
      }],
      "Deaths": [{
        color: "blue",
        name: "Deaths",
        type: "column",
        dataPoints: [
          { x: new Date("1 Jan 2017"), y: 37000 },
        ]
      }],
      "Recovered": [{
        color: "green",
        name: "Recovered",
        type: "column",
        dataPoints: [
          { x: new Date("1 Jan 2017"), y: 37000 },
        ]
      }]
    }
    const buttonStyle = {
      bordeRadius: '4px',
      padding: '8px',
      border: 'none',
      fontSize: '16px',
      backgroundColor: '#2eacd1',
      color: 'white',
      position: 'absolute',
      top: '10px',
      right: '10px',
      cursor: 'pointer'
    } */}

                <table className='box'>
                    <thead>
                        <tr className='content'>
                            <th>STATE</th>
                            <th>ACTIVE</th>
                            <th>CONFIRMED</th>
                            <th>RECOVERED</th>
                            <th>DEATHS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.length
                            ? posts.map((post) =>
                                (
                                    <tr key={post.id}>
                                        <td>{post.state}</td>
                                        <td>{post.active}</td>
                                        <td >{post.confirmed}</td>
                                        <td >{post.recovered}</td>
                                        <td >{post.deaths}</td>
                                    </tr>

                                )) : <tr><td colSpan='5'>Loading...</td></tr>
                        }

                    </tbody>

                </table>
            </div>


        </div>
        
    )
}

export default CovidTracker
