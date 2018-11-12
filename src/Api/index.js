import jsonp from 'jsonp';

export default class Axios {
    static Jsonp(url,params){
        return new Promise((resolve,reject)=>{
            jsonp(url,params,(err,res)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        })
    }
}