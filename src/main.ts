import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from "./route/routes.ts";
import net from "./api/net.ts";

const app = createApp(App)
app.use(createPinia()).use(router).mount('#app')
app.config.globalProperties.$net=net;  //配置axios的全局引用
