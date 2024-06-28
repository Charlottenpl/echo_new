import axios, {AxiosError, AxiosResponse} from 'axios';

// http://localhost:8082/
// https://小熊.fun/api/

const baseUrl = "https://小熊.fun/api/";
const debugUrl = "http://localhost:8082/";
const net = axios.create({
    baseURL: debugUrl,
    timeout: 2000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    withCredentials: true
})


// 请求拦截器
net.interceptors.request.use(
    (config: any) => {
        console.log("config: "+config)
        if (!config.headers) {
            throw new Error(
                `好像没有请求头哦`
            );
        }
        // 这里是从vuex或者pinia中拿到token, 并且放到请求头中
        // const { user } = useStore();
        // if (user.token) {
        //     config.headers.Authorization = `${window.localStorage.getItem('token')}`;
        // }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
net.interceptors.response.use(
    (response: AxiosResponse) => {

        return response.data;
    },
    (error: any) => {
        if (error.response.data) {
            const { code, msg } = error.response.data;
            console.log(code, msg)

            // token 过期,重新登录
            if (code === 'A0999') {
                // ElMessageBox.confirm('当前页面已失效，请重新登录', 'Warning', {
                //     confirmButtonText: 'OK',
                //     type: 'warning'
                // }).then(() => {
                //     window.localStorage.clear();
                //     window.location.href = '/';
                // });
            } else {
                // ElMessage({
                //     message: msg || '系统出错',
                //     type: 'error'
                // });
            }
        }
        return Promise.reject(error.message);
    }
);

export default net