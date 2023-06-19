import http from "../utils/http";
let {get, post } = http

// 查询审阅文件
export const apiGetReviewFiles = data => get("/v1/review/getfiles?limit=10")

//修改文件信息
export const apiUpdateFileInfo = data => post("/captcha/verify",data)

export default {
    apiGetReviewFiles,
    apiUpdateFileInfo
}


