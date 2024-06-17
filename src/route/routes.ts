// 1. 定义路由组件.
// 也可以从其他文件导入
import Content from "../components/Home/Content.vue";
import Home from "../components/Home.vue";
import {createRouter, createWebHistory} from 'vue-router'
import Welcome from "../components/Home/Welcome.vue";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '',
                component: Welcome,
            },
            {
                path: '/content',
                component: Content
            },
            {
                path: "/edit/:id",
                component:()=>import('../components/Blog/BlogEdit.vue'),
            },
            {
                path: "/blog/:id",
                component:()=>import('../components/Blog/view/BlogView.vue'),
            },
        ]
    },
]
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    history: createWebHistory(),
    routes: routes, // `routes: routes` 的缩写
})


export default router