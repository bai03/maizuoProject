import React ,{Component} from "react";
import {Link} from "react-router-dom";
import "./slidenav.css"
//引入非父子组件传值插件
import "pubsub-js"
export default class SlideNav extends Component {
    constructor(){
        super();
        this.state = {
            isShow:false
        };
        PubSub.subscribe("showOrHideSlideNav",()=>{
            this.setState({
                isShow: !this.state.isShow
            })
        })

    }
    render(){
        let {isShow} = this.state;
        let classShow = isShow?" active":" hide"
        return (
            <div id="slidenav">
                <div className={"cover" + classShow}></div>
                <div className={"bgwrap_cover" + classShow} onClick={this.hideSlideNav.bind(this)}></div>
                <div className={"navlist" + classShow}>
                    <Link to="/home" className="linknav" onMouseDown={this.mousdown.bind(this)}>首页</Link>
                    <Link to="/filme" className="linknav" onMouseDown={this.mousdown.bind(this)}>影片</Link>
                    <Link to="/cinemas" className="linknav" onMouseDown={this.mousdown.bind(this)}>影院</Link>
                    <Link to="/mine" className="linknav" onMouseDown={this.mousdown.bind(this)}>我的</Link>
                    <Link to="/card" className="linknav" onMouseDown={this.mousdown.bind(this)}>卖座卡</Link>
                </div>
            </div>
        )
    }
    hideSlideNav(){
        this.setState({
            isShow:!this.state.isShow
        })
    }
    mousdown(e){
        var _this = this;
        setTimeout(() => {
            _this.hideSlideNav();
        }, 100);
    }
}