import {defineStore} from 'pinia'

export const echoed = defineStore('main_store', {
    state: () => ({
        userInfo: {
            img: "/public/def.jpg", //https://images.cnblogs.com/cnblogs_com/charlottepl/1676587/o_210408083032QQ%E5%9B%BE%E7%89%8720210408162958.jpg
            token: ""
        },
        navs: [ //✅
            {
                title: "🌈 首页",
                id: "home",
                url: "/"
            },
            {
                title: "🦄 博客",
                id: "blog",
                url: "/content"
            },
            {
                title: "🥝 时间轴",
                id: "timeline",
                url: "/"
            },
            {
                title: "✨ 搜索",
                id: "search",
                url: "/search"
            },
            {
                title: "😊 分类",
                id: "class",
                url: "/"
            },
            {
                title: "📆 归档",
                id: "archive",
                url: "/"
            },
            {
                title: "🔥 友链",
                id: "links",
                url: "/"
            },
            {
                title: "🌖",
                id: "theme",
                url: "/"
            },

        ],

        btns: [ //✅
            {
                title: "🔥 置顶文章",
                id: "home"
            },
            {
                title: "🥝 TODO",
                id: "timeline"
            },
            {
                title: "✨ 图床相册",
                id: "tags"
            },
            {
                title: "😊 Book",
                id: "class"
            },
            {
                title: "🦄 关于作者",
                id: "links"
            },

        ],

        blog_edit_btns: [
            {
                click: "save",
                title: "💾 保存文件",
            },
            {
                click: "change_theme",
                title: "🫧 更换主题",
            },
        ],

        test: {
            count: 0,
            blogs: [
                {
                    id: 1,
                    title: "git - rebase 使用",
                    description: "原理 一句话总结就是：把当前分支从搬到目标分支之上。 首先，执行rebase操作时会先找到当前分支和目标分支的最近共同commit。 然后记录下当前分支自这个共同commit以来的所有提交。 之后分别将记录中的commit应用到目标分支上，类似于cherry-pick。如果遇到冲突需要先解决冲突。"
                },
                {
                    id: 1,
                    title: "iOS - Apple开发者账户添加新测试设备",
                    description: "### 获取UUID 首先将设备连接XCode，打开Window -> Devices and Simulators，通过下方位置查看 ![](https://img2023.cnblogs.com/blog/1922094/202307/1922094-20230727105117556-9307"
                },
                {
                    id: 1,
                    title: "INSTALL_FAILED_USER_RESTRICTED",
                    description: "错误分析 某天早上调试app的时候突然就发现无法安装了，adb uninstall之后也没用。"
                },
                {
                    id: 1,
                    title: "Android、iOS快速全球化工具",
                    description: "在进行移动端全球化的时候，我们需要根据语言类型准备格式相同，文本不同的好多个文件，如果一个一个翻译显然很浪费时间，如果整篇复制到Google翻译通常翻译出来的文本是没办法直接用的"
                },
                {
                    id: 1,
                    title: "git - rebase 使用",
                    description: "原理 一句话总结就是：把当前分支从搬到目标分支之上。 首先，执行rebase操作时会先找到当前分支和目标分支的最近共同commit。 然后记录下当前分支自这个共同commit以来的所有提交。 之后分别将记录中的commit应用到目标分支上，类似于cherry-pick。如果遇到冲突需要先解决冲突。"
                },
                {
                    id: 1,
                    title: "iOS - Apple开发者账户添加新测试设备",
                    description: "### 获取UUID 首先将设备连接XCode，打开Window -> Devices and Simulators，通过下方位置查看 ![](https://img2023.cnblogs.com/blog/1922094/202307/1922094-20230727105117556-9307"
                },
                {
                    id: 1,
                    title: "INSTALL_FAILED_USER_RESTRICTED",
                    description: "错误分析 某天早上调试app的时候突然就发现无法安装了，adb uninstall之后也没用。"
                },
                {
                    id: 1,
                    title: "Android、iOS快速全球化工具",
                    description: "在进行移动端全球化的时候，我们需要根据语言类型准备格式相同，文本不同的好多个文件，如果一个一个翻译显然很浪费时间，如果整篇复制到Google翻译通常翻译出来的文本是没办法直接用的"
                },
                {
                    id: 1,
                    title: "INSTALL_FAILED_USER_RESTRICTED",
                    description: "错误分析 某天早上调试app的时候突然就发现无法安装了，adb uninstall之后也没用。"
                },
                {
                    id: 1,
                    title: "Android、iOS快速全球化工具",
                    description: "在进行移动端全球化的时候，我们需要根据语言类型准备格式相同，文本不同的好多个文件，如果一个一个翻译显然很浪费时间，如果整篇复制到Google翻译通常翻译出来的文本是没办法直接用的"
                },
                {
                    id: 1,
                    title: "INSTALL_FAILED_USER_RESTRICTED",
                    description: "错误分析 某天早上调试app的时候突然就发现无法安装了，adb uninstall之后也没用。"
                },
                {
                    id: 1,
                    title: "Android、iOS快速全球化工具",
                    description: "在进行移动端全球化的时候，我们需要根据语言类型准备格式相同，文本不同的好多个文件，如果一个一个翻译显然很浪费时间，如果整篇复制到Google翻译通常翻译出来的文本是没办法直接用的"
                },
                {
                    id: 1,
                    title: "INSTALL_FAILED_USER_RESTRICTED",
                    description: "错误分析 某天早上调试app的时候突然就发现无法安装了，adb uninstall之后也没用。"
                },
                {
                    id: 1,
                    title: "Android、iOS快速全球化工具",
                    description: "在进行移动端全球化的时候，我们需要根据语言类型准备格式相同，文本不同的好多个文件，如果一个一个翻译显然很浪费时间，如果整篇复制到Google翻译通常翻译出来的文本是没办法直接用的"
                },
                {
                    id: 1,
                    title: "git - rebase 使用",
                    description: "原理 一句话总结就是：把当前分支从搬到目标分支之上。 首先，执行rebase操作时会先找到当前分支和目标分支的最近共同commit。 然后记录下当前分支自这个共同commit以来的所有提交。 之后分别将记录中的commit应用到目标分支上，类似于cherry-pick。如果遇到冲突需要先解决冲突。"
                },
                {
                    id: 1,
                    title: "iOS - Apple开发者账户添加新测试设备",
                    description: "### 获取UUID 首先将设备连接XCode，打开Window -> Devices and Simulators，通过下方位置查看 ![](https://img2023.cnblogs.com/blog/1922094/202307/1922094-20230727105117556-9307"
                },
                {
                    id: 1,
                    title: "INSTALL_FAILED_USER_RESTRICTED",
                    description: "错误分析 某天早上调试app的时候突然就发现无法安装了，adb uninstall之后也没用。"
                },
                {
                    id: 1,
                    title: "Android、iOS快速全球化工具",
                    description: "在进行移动端全球化的时候，我们需要根据语言类型准备格式相同，文本不同的好多个文件，如果一个一个翻译显然很浪费时间，如果整篇复制到Google翻译通常翻译出来的文本是没办法直接用的"
                },
                {
                    id: 1,
                    title: "git - rebase 使用",
                    description: "原理 一句话总结就是：把当前分支从搬到目标分支之上。 首先，执行rebase操作时会先找到当前分支和目标分支的最近共同commit。 然后记录下当前分支自这个共同commit以来的所有提交。 之后分别将记录中的commit应用到目标分支上，类似于cherry-pick。如果遇到冲突需要先解决冲突。"
                },
                {
                    id: 1,
                    title: "iOS - Apple开发者账户添加新测试设备",
                    description: "### 获取UUID 首先将设备连接XCode，打开Window -> Devices and Simulators，通过下方位置查看 ![](https://img2023.cnblogs.com/blog/1922094/202307/1922094-20230727105117556-9307"
                },
                {
                    id: 1,
                    title: "INSTALL_FAILED_USER_RESTRICTED",
                    description: "错误分析 某天早上调试app的时候突然就发现无法安装了，adb uninstall之后也没用。"
                },
                {
                    id: 1,
                    title: "Android、iOS快速全球化工具",
                    description: "在进行移动端全球化的时候，我们需要根据语言类型准备格式相同，文本不同的好多个文件，如果一个一个翻译显然很浪费时间，如果整篇复制到Google翻译通常翻译出来的文本是没办法直接用的"
                },
                {
                    id: 1,
                    title: "INSTALL_FAILED_USER_RESTRICTED",
                    description: "错误分析 某天早上调试app的时候突然就发现无法安装了，adb uninstall之后也没用。"
                },
                {
                    id: 1,
                    title: "Android、iOS快速全球化工具",
                    description: "在进行移动端全球化的时候，我们需要根据语言类型准备格式相同，文本不同的好多个文件，如果一个一个翻译显然很浪费时间，如果整篇复制到Google翻译通常翻译出来的文本是没办法直接用的"
                },
                {
                    id: 1,
                    title: "INSTALL_FAILED_USER_RESTRICTED",
                    description: "错误分析 某天早上调试app的时候突然就发现无法安装了，adb uninstall之后也没用。"
                },
                {
                    id: 1,
                    title: "Android、iOS快速全球化工具",
                    description: "在进行移动端全球化的时候，我们需要根据语言类型准备格式相同，文本不同的好多个文件，如果一个一个翻译显然很浪费时间，如果整篇复制到Google翻译通常翻译出来的文本是没办法直接用的"
                },
                {
                    id: 1,
                    title: "INSTALL_FAILED_USER_RESTRICTED",
                    description: "错误分析 某天早上调试app的时候突然就发现无法安装了，adb uninstall之后也没用。"
                },
                {
                    id: 1,
                    title: "Android、iOS快速全球化工具",
                    description: "在进行移动端全球化的时候，我们需要根据语言类型准备格式相同，文本不同的好多个文件，如果一个一个翻译显然很浪费时间，如果整篇复制到Google翻译通常翻译出来的文本是没办法直接用的"
                },
            ],
            tags: ["android", "ios", "web", "python", "sql"]
        },

        // 这里之前是 JSON.parse(localStorage.getItem("toolbar") || '{"visible": false, "enter": true}')
        toolbar: {
            visible: true,
            enter: true
        },
        sortInfo: [],
        currentUser: {},
        currentAdmin: {},
        sysConfig: {},
        webInfo: {
            host: "",
            webName: "Charlottepl's blog",
            webTitle: [],
            notices: [],
            randomCover: [],
            footer: "",
            backgroundImage: "",
            avatar: ""
        }
    }),
    actions: {
        increment() {
            this.test.count++
        },
    }
})