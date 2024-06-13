import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from "./route/routes.ts";
import net from "./api/net.ts";


// 引入css
import './assets/css/animation.css'
import './assets/css/index.css'
import './assets/css/tocbot.css'
import './assets/css/color.css'
import './assets/css/markdown-highlight.css'
import './assets/css/font-awesome.min.css'

const app = createApp(App)
app.use(createPinia()).use(router).mount('#app')
app.config.globalProperties.$net=net;  //配置axios的全局引用
