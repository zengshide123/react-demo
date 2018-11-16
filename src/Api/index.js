import jsonp from 'jsonp';
import axios from 'axios';
import {message} from 'antd';

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
    static Ajax(options){
        let baseURL = ' https://www.easy-mock.com/mock/5bed2a210dfee6695b4bc667/manage';
        return new Promise((resolve,reject)=>{
            axios({
                method: options.method||'get',
                url: options.url,
                baseURL,
                data: options.data,
                timeout:5000
            }).then((res)=>{
                if(res.status===200){
                      if(!res.data.code){
                        resolve(res.data.result)
                      }else{
                        message.error(res.mesgs,1)
                      }
                }else{
                    reject()
                }            
            })
        });
    }
}