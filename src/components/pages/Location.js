import React ,{Component} from "react";
import {getLocationList} from "../../server/locationServer.js";
import "../../../strict/css/pages/location.css";
export default class Location extends Component {
    constructor(){
        super();
        this.state={
            locationdata:[],
            hotcity:['北京','上海','深圳','广州']
        }
    }
    render(){
        let {hotcity,locationdata} = this.state;
        return (
            <div className="pages">
                <div ref="locationpage" className="location_page">
                    <div> 
                        <div className="gray">GPS定位您的位置</div>
                        <div className="classboxwrap">
                            {hotcity.map(result=>{
                                return <span className="citybox" key={result}>{result}</span>
                            })}
                        </div>
                        <div className="gray">按字母排序</div>
                        <div className="classboxwrap">
                            {locationdata.map((result)=>{
                                return <span className="citybox"  key={result.name}>{result.name}</span>
                            })      }
                        </div>
                        {locationdata.map(result=>{
                            return (
                                <span>
                                    <div key={result.name} className="gray">{result.name}</div>
                                    <div className="classboxwrap">
                                        {result.data.map((city)=>{
                                            return <span key={city} className="citybox">{city}</span>
                                        })}
                                    </div>
                                </span>
                                )
                        })}
                    </div>  
                </div>
            </div>
        )
    }
    componentDidMount(){
        getLocationList().then(result=>{
            this.setState({
                locationdata:result
            })
        })
        var dom = this.refs.locationpage;
        console.log(dom);
        var locationScroll = new IScroll(dom,{
            tap:true,
            click:true,
            probeType:3
        })
        console.log(locationScroll)
    }
}