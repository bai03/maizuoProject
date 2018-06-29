import React ,{Component} from "react";
import "./home.css"
import {getComingSoon,getnowplaying} from "../../../server/homeServer.js"
import {Link} from "react-router-dom";

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            comingSoon:[],
            nowplaying:[]
        }
    }
    render(){
        let {comingSoon,nowplaying} = this.state;
        return (
            <div id="home" className="pages" ref="home">
                <div>
                    <div className="filenowplaying">
                        {nowplaying.map(film=>{
                            return (<div className="film" id={film.id} key={film.id}>
                                <img className="home_img" src={film.cover.origin} alt=""/>
                                <div className="filmnamebox">
                                    <div>{film.name}</div>
                                    <div>{film.cinemaCount}家影院上映</div>
                                </div>
                            </div>)
                        })}
                        <Link to="/filme/shownow"  className="flagbox">更多热映电影</Link>
                    </div>
                    <div className="filecomingsoon">
                        {comingSoon.map(film=>{
                            return (<div className="film" id={film.id} key={film.id}>
                                <img className="home_img" src={film.cover.origin} alt=""/>
                                <div className="filmnamebox">
                                    <div>{film.name}</div>
                                    <div>{film.premiereAt}上映</div>
                                </div>
                            </div>)
                        })}
                        <Link to="/filme/showwill"  className="flagbox">更多即将上映电影</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
    componentDidMount(){
        var dom = this.refs.home;
        this.homescroll = new IScroll(dom,{
            tap:true,
            click:true,
            probeType:3
        })
        getComingSoon().then(result=>{
            this.setState({
                comingSoon:result
            })
        }); 
        getnowplaying().then(result=>{
            this.setState({
                nowplaying:result
            })
        });
    }
    componentDidUpdate(props,state){
        this.homescroll.on('scroll',function(){
            this.refresh();
        })
    }
}