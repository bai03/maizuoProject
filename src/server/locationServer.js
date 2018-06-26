import axios from 'axios';

export function getLocationList(){
    return new Promise((resolve,reject)=>{
        axios.get('/v4/api/city',{
            params:{
                __t:1530015925335
            }
        })
        .then((response)=>{
            //数据过滤
            var arr = response.data.data.cities;

            var obj = {};
            // for(var i=65;i<=90;i++){
            //     var str = String.fromCharCode(i);
                
            // }
            for(var i=0;i<arr.length;i++){
                var str = arr[i].pinyin.charAt(0);
                if(!obj[str]){
                    obj[str]=[];
                }else{
                    obj[str].push(arr[i].name);
                }
            }
            var newarr = [];
            for(var i=65;i<=90;i++){
                var str1 = String.fromCharCode(i);
                if(obj[str1]){
                    var objnew = {};
                    objnew.name = str1;
                    objnew.data = obj[str1];
                    newarr.push(objnew);
                }
            }

            resolve(newarr);
        })
    })
}
