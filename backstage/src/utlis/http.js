//@/api/index.js
import request from "./request";
let baseUrl = "/api";
// 添加文章接口
export const getLogin = (query) => {
  return request({
    url: baseUrl + "/user/login", //接口地址
    method: "post",
    data: query,
  });
};
