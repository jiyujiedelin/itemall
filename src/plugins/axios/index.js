import axios from "axios";

export const http = (config) => {
  // 创建axios实例
  const axiosIntance = axios.create({
    // 请求的公共地址
    baseURL: "http://localhost:3000",
    // 超时时间
    timeout: 5000,
  });

  // 配置请求拦截器
  axiosIntance.interceptors.request.use(
    (config) => {
      // loading
      //token
      return config;
    },
    (err) => console.log(err)
  );

  // 配置响应拦截器
  axiosIntance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (err) => {
      console.log(err);
    }
  );
  return axiosIntance(config);
};
