import React ,{Component} from "react";
import {getLocationList} from "../../server/locationServer.js";
import "../../../strict/css/pages/location.css"
export default class Location extends Component {
    constructor(){
        super();
        this.state={
            locationdata:[],
            hotcity:['北京','上海','深圳','广州']
        }
    }
    render(){
        let {hotcity} = this.state;
        return (
            <div className="pages">
                <div className="gray">GPS定位您的位置</div>
                <div className="classboxwrap">
                    {hotcity.map(result=>{
                        return <span className="citybox" key={result}>{result}</span>
                    })}
                </div>
            </div>
        )
    }
    componentDidMount(){
        getLocationList().then(result=>{
            console.log(result);
        })
        
    }
}