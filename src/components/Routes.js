import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import CovidTracker from "./CovidTracker";
import SelfAsssessment from "./SelfAsssessment";
import Home from "./Home";
import History from "./History";


export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/CovidTracker" component={CovidTracker} />
                    <Route path="/SelfAsssessment" component={SelfAsssessment} />
                </Switch>
            </Router>
        )
    }
}