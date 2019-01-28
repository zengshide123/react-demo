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
        // 全局loading的处理
        let loadingNode;
        if(options.loading){
            loadingNode = document.getElementById('ajaxLoading');
            loadingNode.style.display = 'block';
        }
        let baseURL = ' https://www.easy-mock.com/mock/5bed2a210dfee6695b4bc667/manage';
        return new Promise((resolve,reject)=>{
            axios({
                method: options.method||'get',
                url: options.url,
                baseURL,
                data: options.data,
                timeout:5000,
                params:  options.params
            }).then((res)=>{
                if(options.loading){
                    loadingNode = document.getElementById('ajaxLoading');
                    loadingNode.style.display = 'none';
                }
                if(res.status===200){
                      if(!res.data.code){
                        resolve(res.data.result)
                      }else{
                        message.error(res.data.msgs,1)
                      }
                }else{
                    reject()
                }            
            }).catch(err=>{
                if(options.loading){
                    loadingNode = document.getElementById('ajaxLoading');
                    loadingNode.style.display = 'none';
                }
                message.error("网络出现问题!",1)
            })
        });
    }
}