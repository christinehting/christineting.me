import React, { Component } from "react";
import {
    Route,
    BrowserRouter
} from "react-router-dom";


import Home from "./Home";
import Resume from "./Resume";


import "./Main.css";

class Main extends Component {
    render() {
        return (
            <BrowserRouter basename={window.location.pathname || ''}>
                <div>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/resume" component={Resume} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;