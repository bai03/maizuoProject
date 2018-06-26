import React , {Component} from "react";
import {NavLink,Link} from "react-router-dom";
import "../../../strict/css/pages/nav.css";

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
                <div className="navlink">三</div>
                <h1>{navname}</h1>
                
                <div className="mine"><i className="iconfont icon-weibiaoti2fuzhi12"></i></div>
                <Link to="/location">
                    <div className="location">地址<i className="iconfont icon-xia"></i></div>
                </Link>
            </div>
        )
    }
}