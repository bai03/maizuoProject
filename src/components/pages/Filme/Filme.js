import React ,{Component} from "react";
import {Route ,Link , Redirect} from "react-router-dom";
import "./filme.css"
import Shownow from "./Shownow.js"
import Showwill from "./Showwill.js"
export default class Filme extends Component {
    constructor(){
        super();
        this.state = {
            flag:0  //0:热映  1:即将上映  
        }
    }
    render(){
        let {flag} = this.state;
        return (
            <div id="filme" className="pages" ref="film">
                <div>
                    <span className="filmnav">
                        <Link to="/filme/shownow" className={"filmnavbox" + (flag==0?" active":"")} onClick={this.changeflag.bind(this,0)}>正在热映</Link>
                        <Link to="/filme/showwill" className={"filmnavbox" + (flag==1?" active":"")} onClick={this.changeflag.bind(this,1)}>即将上映</Link>
                    </span>
                    <Route path="/filme" exact render={()=>{
                            return  <Redirect to="/filme/shownow" />
                        }
                    } />
                    <Route path="/filme/shownow" component={Shownow} />
                    <Route path="/filme/showwill" render={()=>{
                        return <Showwill changeflag={this.changeflag.bind(this,1)}/> 
                    }} /> 
                </div>
            </div>
        )
    }
    componentDidMount(){
        var dom = this.refs.film;
        this.filmScroll = new IScroll(dom,{
            tap:true,
            click:true,
            probeType:3
        });
        this.filmScroll.on('scroll',function(){
            this.refresh();
        })
        // this.filmScroll.on('scrollEnd',()=>{
        //     filmeNowServer(this.state.pagenow).then((result)=>{
        //         console.log(result);
        //         this.setState({
        //             nowplayingdata:[...this.state.nowplayingdata,...result],
        //             pagenow:this.state.pagenow + 1
        //         })
        //     });
        // })
        //请求当前热映电影信息
    }
    changeflag(info){
        this.setState({
            flag: info
        })
    }
    
}