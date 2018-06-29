import axios from "axios";

export function cinemaServer(){
    return new Promise((resolve,reject)=>{
        axios.get("/v4/api/cinema?",{
            params:{
                _t:new Date().getTime()
            }
        })
        .then(response=>{
            // console.log(response);
            var data = response.data.data.cinemas;
            // console.log(data);
            var cinemadata = {};
            data.map(result=>{
                var address = result.district.name
                if(!cinemadata[address]){
                    cinemadata[address] = []
                }
                cinemadata[address].push(result);
            });
            // console.log(cinemadata);
            resolve(cinemadata);
        })
    })
}