import axios from 'axios';

const service = axios.create({
    baseURL: "https://raw.githubusercontent.com/"
})

service.interceptors.request.use(config => {
    config.headers = {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
    return config
}, error => {
    return error;
})

service.interceptors.response.use(response => {
    if (response.code) {
        switch (response.code) {
            case 200:
                return response.data;
            case 401:
                //未登入處理方法
                break;
            case 403:
                //token過期處理方法
                break;
            default:
                console.log(response.data.msg)
        }
    } else {
        return response;
    }
})
export default service