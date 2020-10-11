import axios from "axios";
import { Message } from 'element-ui';
import { getParemter } from "@/utils/common" 
//使用自定义配置新建一个 axios 实例
const service = axios.create({
  baseURL: "" // https://xxx.xxxxxx.com/api
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 配置auth_token
    let token = getParemter("auth_token");
    if(token==null){
      token = sessionStorage.getItem("auth_token");
    }else{
      sessionStorage.setItem("auth_token",token);
    }
    config.headers.auth_token=token;
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    let data = response.data;
    if (data.code !== 0) {
      // Message.error(data.msg);
      return Promise.resolve(data);  //return Promise.reject(data);
    } else {
      //return response; //所有相应数据
      //Message.success(data.msg);
      return Promise.resolve(data); //只有data数据
    }
  },
  function(error) {
    let status = error.response.status;
    
    if(status==403){
      const url = window.location.href;
      const loginUrl = "";
      console.log("请先登录！");
      // Message.error("请先登录！");
      // window.location.href = loginUrl; // 跳转到登录页面
    }
    
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
export default service;
