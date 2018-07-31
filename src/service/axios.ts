
import axios from 'axios';
import app from '../main';
import getUrl from './getUrl';
import router from '../router';
// tslint:disable-next-line:no-any
const ax: any = axios.create({ baseURL: getUrl() });

interface Config {
    url: string;
    headers: {
        Authorization: string;
        Accept: string;
    };
    data: string;
}

ax.interceptors.request.use((config: Config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 添加一个响应拦截器
ax.interceptors.response.use( (response) => {
    if (response.status === 200 && response.data.resCode !== undefined && response.data.resCode !== '0') {
        app.$message.error(response.data.resMsg);
    }
    return response;
}, (err) => {
    if (err && err.response) {
        let msg = '';
        switch (err.response.status) {
            case 400:
                if (err.response.data.error_description) {
                    msg = err.response.data.error_description;
                }
                break;
            case 401:
                msg = '登陆过期，请重新登陆';
                router.push({ name: 'login' });
                break;
            case 403:
                msg = '无权限访问当前资源';
                break;
            case 404:
                msg = '请求地址出错';
                break;
            case 405:
                msg = '不被允许的访问方法';
                break;
            case 408:
                msg = '请求超时';
                break;
            case 500:
                msg = '服务器内部错误';
                break;
            case 501:
                msg = '服务未实现';
                break;
            case 502:
                msg = '网关错误';
                break;
            case 503:
                msg = '服务不可用';
                break;
            case 504:
                msg = '网关超时';
                break;
            case 505:
                msg = 'HTTP版本不受支持';
                break;
            default:
        }
        app.$message.error(msg);
    }
    return Promise.reject(err);
});

export default ax;