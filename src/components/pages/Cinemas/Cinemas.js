import React ,{Component} from "react";

import {cinemaServer} from "../../../server/cinemaServer.js"
export default class Cinemas extends Component {
    constructor(){
        super();
        this.state = {
            cinemadata:{}
        }
    }
    render(){
        let {cinemadata} = this.state;
        return ( 
            <div id="cinemas" className="pages">
                {
                   ()=>{
                    for(var key of cinemadata){
                        console.log(key)
                    }
                   }
                }
            </div>
        )
    }
    componentDidMount(){
        cinemaServer().then(result=>{
            console.log(result);
            this.setState({
                cinemadata : result
            })
        })
    }
}