import React , {Component} from "react";
import {filmeNowServer} from "../../../server/filmeServer.js";
export default class Shownow extends Component {
    constructor(){
        
        super();
        this.state = {
            nowplayingdata:[],
            pagenow:1,
            pagewill:1,
        }
    }
    render(){
        let {nowplayingdata} = this.state;
        return (
            <div className="film_show_now">{
                nowplayingdata.map(result=>{
                    return <div key={result.id} id={result.id} className="film_box">
                        <img src={result.poster.origin} alt="" className="film_img"/>
                        <div className="film_name"><h3>{result.name}</h3><span>{result.grade}</span></div>
                        <p>{result.intro}</p>
                        <span>{result.cinemaCount}家影院上映</span>
                        <span>{result.watchCount}人购票</span>
                    </div>
                })
                }
            </div>
        )
    }
    componentDidMount(){
        filmeNowServer(this.state.pagenow).then((result)=>{
            console.log(result);
            this.setState({
                nowplayingdata:[...this.state.nowplayingdata,...result],
                pagenow:this.state.pagenow + 1
            })
        });
    }
    
}