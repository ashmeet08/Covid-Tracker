import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './History';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          {/* <h1>COVID-19</h1> */}
          
          <form className="lander">
          <p>Stay Safe, Stay Home</p>
            <Button onClick={() => history.push('/SelfAsssessment')} className="b1">Self-Checker</Button>
            <Button className="b1" onClick={() => history.push('/CovidTracker')}>Current stats of India</Button>
          </form>
        </div>
      </div>
    );
  }
}