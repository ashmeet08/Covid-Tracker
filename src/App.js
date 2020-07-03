import React from 'react';
import './App.css';
import {
  BrowserRouter as Router} from "react-router-dom";
import Routes from './components/Routes';
// import CanvasJSReact from './canvasjs.react';

// var React = require('react');
// var Component = React.Component;
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// var $ = require('jquery');

// var totalVisitors = 829500;

// var visitorsDrilldownedChartOptions = {
//   animationEnabled: true,
//   theme: "light2",
//   axisY: {
//     gridThickness: 0,
//     includeZero: false,
//     lineThickness: 1
//   },
//   data: []
// };

// var newVSReturningVisitorsOptions = {
//   animationEnabled: true,
//   theme: "light2",
//   title: {
//     text: "New vs Returning Visitors"
//   },
//   subtitles: [{
//     text: "Click on Any Segment to Drilldown",
//     backgroundColor: "#2eacd1",
//     fontSize: 16,
//     fontColor: "white",
//     padding: 5
//   }],
//   legend: {
//     fontFamily: "calibri",
//     fontSize: 14,
//     itemTextFormatter: function (e) {
//       return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";
//     }
//   },
//   data: []
// };


function App() {
    return (
      <div className="App">
      
      <Routes />
    </div>
      // <div>
      //   <CanvasJSChart options={this.options}
      //     onRef={ref => this.chart = ref}
      //   />
      //   {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      //   <button className="btn invisible" id="backButton" style={buttonStyle}>&lt; Back</button>
      // </div>

      // <Router>
      //   <div>
      //     <nav>
      //       <ul>
      //         <li>
      //           <Link to="/">Covid Tracker</Link>
      //         </li>
      //         <li>
      //           <Link to="/SelfAsssessment">Self Assessment</Link>
      //         </li>

      //       </ul>
      //     </nav>

      //     {/* A <Switch> looks through its children <Route>s and
      //     renders the first one that matches the current URL. */}
      //     <Switch>
      //       <Route path="/SelfAsssessment">
      //         <SelfAsssessment />
      //       </Route>
      //       <Route path="/">
      //         <CovidTracker />
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
      
    )
  }


export default App;
