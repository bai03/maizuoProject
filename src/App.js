import React, {Component} from "react";
import { BrowserRouter,HashRouter, Route, Link } from 'react-router-dom'
//引入地址页面
import Location from "./components/pages/Location.js"
import Nav from "./components/pages/Nav.js"

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        return (
                <HashRouter>
                    <div id="app">
                        <Nav></Nav> 
                        <Route path="/location"  component={Location}/>
                    </div>
                </HashRouter>
        )
    }
}