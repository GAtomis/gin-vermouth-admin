/*
 * @Description: axios
 * @Author: Gavin
 * @Date: 2022-08-02 15:04:30
 * @LastEditTime: 2024-05-27 17:58:16
 * @LastEditors: GAtomis 850680822@qq.com
 */
import axios from 'axios';

import { message } from 'ant-design-vue';
import { successCode,setToken } from './http-conifg';
import router from '@/router';

const rootPath = import.meta.env.VITE_BASE_API as string;
const instance = axios.create({
  baseURL: rootPath,
});

instance.interceptors.request.use((config) => {
  setToken(config)
  return config;
});
instance.interceptors.response.use(


  (response) => {



      if(successCode.includes(response.data.code)){

        return response.data;

      }else{
        message.error(response.data.msg);
        return Promise.reject(response.data)
      }
    

  },
  (error) => {
        message.error('请求异常请检查网络是否畅通');
        return Promise.reject(error)
  }
);

export default instance;
