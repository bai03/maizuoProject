import React , {Component} from "react";
import {NavLink,Link} from "react-router-dom";
import "./nav.css";
import "pubsub-js";

export default class Nav extends Component {
    constructor(){
        super();
        this.state = {
            navname:'卖座电影',
        }
    }
    render(){
        let {navname} = this.state;
        return (
            <div id="nav">
                <div className="navlink" onClick={this.showSlideNav.bind(this)}>三</div>
                <h1 onClick={this.showSlideNav.bind(this)}>{navname}</h1>
                
                <div className="mine"><i className="iconfont icon-weibiaoti2fuzhi12"></i></div>
                <Link to="/location">
                    <div className="location">地址<i className="iconfont icon-xia"></i></div>
                </Link>
            </div>
        )
    }
    //显示隐藏侧边导航
    showSlideNav(){
        PubSub.publish('showOrHideSlideNav')
    }
}