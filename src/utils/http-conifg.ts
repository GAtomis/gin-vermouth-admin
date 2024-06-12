import {createStorage}  from './storage/index'
import {InternalAxiosRequestConfig} from 'axios'
import { ACCESS_TOKEN, CACHE_USERNAME } from '@/store/store-enum'
const Storage = createStorage({ storage: localStorage })
//成功code码
const successCode=[0,200]
//错误code码
const errorCode=[404,500,403]

const setToken = (config:InternalAxiosRequestConfig)=>{
    
  
    
    const token =Storage.get(ACCESS_TOKEN,null)
    console.log(token);
    
    if(token){
        config.headers['X-Token']=token

    }

}
export {
    successCode,
    errorCode,
    setToken
}

