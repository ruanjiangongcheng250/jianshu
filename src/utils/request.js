import axios from 'axios';
import Qs from 'qs';

// 创建axios实例
const service = axios.create({
    baseURL: '/',
    timeout: 10000,
    headers: {},
    // url参数形式 数组a=''&a='' 对象形式a.b.c='' 过滤掉字符串为空、null、undefined的字段
    paramsSerializer: function (params) {
        return Qs.stringify(params, {
            arrayFormat: 'repeat',
            allowDots: true,
            filter: (prefix, value) => {
                if (value === '' || typeof value === 'undefined') return;
                return value;
            },
            skipNulls: true
        });
    },
    // body参数形式 数组a[0]=''&a[1]='' 对象形式a.b.c='' 过滤掉字符串为空、null、undefined的字段 默认Content-Type: x-www-form-urlencoded
    transformRequest: [
        function (data = {}) {
            return Qs.stringify(data, {
                allowDots: true,
                filter: (prefix, value) => {
                    if (value === '' || typeof value === 'undefined') return;
                    return value;
                },
                skipNulls: true
            });
        }
    ]
});
// request拦截器
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
// response拦截器
service.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);
export default service;