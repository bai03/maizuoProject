import React, {Component} from "react";

import {filmeWillServer} from "../../../server/filmeServer.js";
export default class Showwill extends Component {
    constructor(){
       
        super();
        this.state = {
            willplayingdata:[],
            pagewill:1,
        }
    }
    render(){
        let {willplayingdata} = this.state;
        return (
            <div className="film_show_will">{
                willplayingdata.map(result=>{
                    return <div key={result.id} id={result.id} className="film_box">
                        <img src={result.poster.origin} alt="" className="film_img"/>
                        <div className="film_name"><h3>{result.name}</h3><span>{result.grade}</span></div>
                        <p>{result.intro}</p>                       
                    </div>
                })
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.changeflag();
        filmeWillServer().then(result=>{
            console.log(result);
            this.setState({
                willplayingdata:result
            })
        })
    }
}