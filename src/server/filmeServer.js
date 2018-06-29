import axios from "axios"


export function filmeNowServer(pagenow){
    // console.log(page);
    return new Promise((resolve,reject)=>{
        axios.get('/v4/api/film/now-playing',{
            params:{
                page:pagenow,
                count:7
            }
        })
        .then(response=>{
            console.log(response);
            var data = response.data.data.films;
            resolve(data);
        })
    })
}

export function filmeWillServer(pagewill){
    // console.log(page);
    return new Promise((resolve,reject)=>{
        axios.get('v4/api/film/coming-soon',{
            params:{
                page:pagewill,
                count:7
            }
        })
        .then(response=>{
            console.log(response);
            var data = response.data.data.films;
            resolve(data);
        })
    })
}
