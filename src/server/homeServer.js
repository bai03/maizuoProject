import axios from "axios";
//请求即将上映电影
export function getComingSoon(){
    return new Promise((resolve,reject)=>{
        axios.get('/v4/api/film/coming-soon',{
            params:{
                _t :new Date().getTime()
            }
        })
        .then(response=>{
            console.log(response)
            var data = response.data.data.films;
            console.log(data);
            for(var i=0;i<data.length;i++){
                var date = new Date(data[i].premiereAt);
                var month = date.getMonth() + 1;
                var day = date.getDate();
                data[i].premiereAt = month + "月" + day + "日";
            }
            resolve(data);
        })
    })
}

export function getnowplaying(){
    return new Promise((resolve,reject)=>{
        axios.get("/v4/api/film/now-playing",{
            _t:new Date().getTime()
        })
        .then(response=>{
           
            var data = response.data.data.films;
            for(var i=0;i<data.length;i++){
                for(var j=i+1;j<data.length;j++){
                    if(data[i].cinemaCount<data[j].cinemaCount){
                        var a = data[i];
                        data[i] = data[j];
                        data[j] = a;
                    }
                }
            }
            console.log(data);
            resolve(data);
        })
    })
}