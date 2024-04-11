<script setup lang="ts">

import {onBeforeMount, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const content = ref<string>("请在此处输入文本");
const route = useRoute()
const id = ref('')

onBeforeMount(()=>{
  id.value = <string>route.params.articleId;
})

// 1.1 引入Vditor 构造函数
import Vditor from 'vditor'
// 1.2 引入样式
import 'vditor/dist/index.css';

// 2. 获取DOM引用
const vditor = ref()

const isDark = ref(true)

// 3. 在组件初始化时，就创建Vditor对象，并引用
onMounted(() => {
  vditor.value = new Vditor('vditor',{
    // 编辑器中默认展示的文本
    value:content.value,
    //打字机模式
    typewriterMode: true,
    //占位内容
    placeholder: "开写！",
    //是否开启字数统计
    counter:{
      enable: true,
      type: "text"
    },

    //编辑模式
    mode: "ir", //"wysiwyg" | "sv" | "ir";
    theme: "dark",
    //预览主题，需要和theme联动
    preview:{
      theme: {
        //自定义主题的话应该是把path改成自己的url，然后list写url下面有哪些css主题文件，然后current写当前使用的主题是哪个
        current: "dark",
        list: {"ant-design": "Ant Design", "dark": "Dark", "light": "Light", "wechat": "WeChat"},
        path: "https://unpkg.com/vditor@3.10.3/dist/css/content-theme"
      },
      hljs:{
        enable: true,
        lineNumber: true,
        style: "api", //代码风格：https://xyproto.github.io/splash/docs/longer/all.html
      },
    },
    icon:"ant",
    comment:{
      enable: false,
      add(id, text, commentsData) {
          alert(id+text+commentsData)
      },
    },
    outline:{
      enable: true,
      position: "left"
    },
    // 设置编辑器的宽高
    height: '95%',
    width: '70%',
    tab:"\t",
    // 设置工具栏中展示的工具
    toolbar: ['emoji', 'br', 'bold', '|', 'line','quote','list','check'],
    // 编辑器失去焦点后的回调函数
    blur(value){
      // 保存文档....
      save(value)
    }
  })



})


function save(md: string) {
  content.value = md
  console.log('保存成功: '+content.value)
}

function saveFile() {
  // let it = vditor.value as Vditor
  // it.disabled()
  content.value = vditor.value.getValue()
  console.log(content.value)
}

function changeTheme() {
  isDark.value = !isDark.value;
  vditor.value.setTheme(
      isDark.value? "dark":"classic",
      isDark.value? "dark":"wechat",
      isDark.value? "github-dark":"github");
}

</script>

<template>
  <div class="editor_box">
    <div style="width: 90%;height: 40px;line-height: 30px;padding-top: 5px;padding-bottom: 5px;margin: 0 auto;">
      <a style="text-decoration: none;cursor: pointer" @click="saveFile">
        <span>✨保存文档</span>
      </a>
      <a style="text-decoration: none;cursor: pointer" @click="changeTheme">
        <span>🌈更换主题</span>
      </a>
    </div>
    <div id="vditor"></div>
  </div>

</template>

<style scoped>
.editor_box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>