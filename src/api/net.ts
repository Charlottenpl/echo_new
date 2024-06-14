import axios, {AxiosError, AxiosResponse} from 'axios';

const net = axios.create({
    baseURL: "https://小熊.fun/api/",
    timeout: 2000,
    headers: { 'Content-Type': 'application/json;charset=utf-8' }
})


// 请求拦截器
net.interceptors.request.use(
    (config: any) => {
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
        const { code, msg } = response.data;
        if (code === '00000') {
            return response.data;
        } else {
            // 响应数据为二进制流处理(Excel导出)
            if (response.data instanceof ArrayBuffer) {
                return response;
            }

            // ElMessage({
            //     message: msg || '系统出错',
            //     type: 'error'
            // });
            return Promise.reject(new Error(msg || 'Error'));
        }
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