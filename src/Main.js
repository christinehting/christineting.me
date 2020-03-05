import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";


import Home from "./Home";
import Resume from "./Resume";


import "./Main.css";

class Main extends Component {
    render() {
        return (
            <HashRouter basename='/docs'>
                <div>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/resume" component={Resume} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;