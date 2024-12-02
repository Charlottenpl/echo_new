<script setup lang="ts">

import {getCurrentInstance, onBeforeMount, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {addBlog, getArticle, updateBlog} from "../../api/article.ts"

const content = ref<string>("");
const route = useRoute()
const id = ref(0)
const data = echoed()
const btns = data.blog_edit_btns

// 获取全局方法，好麻烦
const cns = getCurrentInstance()
const vue = cns!.appContext.config.globalProperties

onBeforeMount(()=>{
  id.value = Number(route.params.id);
})

// 1.1 引入Vditor 构造函数
import Vditor from 'vditor'
// 1.2 引入样式
import 'vditor/dist/index.css';
import {echoed} from "../../stores/maind";
import {Blog, getBlogFromRes} from "../../bean/Blog.ts";

const cdn = "https://unpkg.com/vditor@3.10.3/dist/css/content-theme/" //https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/ or https://unpkg.com/vditor@3.10.3/dist/css/content-theme

const hljs_theme = "dracula" //
// 2. 获取DOM引用
const vditor = ref()
const blog = ref<Blog | null>(null);
const isDark = ref(true)

// 3. 在组件初始化时，就创建Vditor对象，并引用
onMounted(() => {
  data.toolbar.visible = false
  data.edit.theme = "classic"
  data.edit.currentTheme = "wechat"

  if (id.value == -1){ // New
    blog.value = new Blog()
    blog.value.id = -1
    blog.value.title = "test" // TODO 找位置添加标题
    initEditor()
  }else{ // Update
    getArticleById(id.value)
  }

})


function getArticleById(id: number){

  var params = {
    id : id,
    password : ""
  }

  getArticle({data: params}).then((res)=>{
    if (!vue.$common.isEmpty(res.message.Content)) {
      blog.value = getBlogFromRes(res.message);
      initEditor()
    }else{
      var placeholderMD = "> Sorry! error: article is empty."
      alert(placeholderMD)
    }
  }).catch((error) => {
    console.log(error)
    var placeholderMD = "> Sorry! error: " + error
    alert(placeholderMD)
  });

}


function initEditor(){


  vditor.value = new Vditor('vditor',{
    // 编辑器中默认展示的文本
    value:blog.value!.content,
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
    theme: data.edit.theme,
    //预览主题，需要和theme联动
    preview:{
      theme: {
        //自定义主题的话应该是把path改成自己的url，然后list写url下面有哪些css主题文件，然后current写当前使用的主题是哪个
        current: data.edit.currentTheme,
        list: {"ant-design": "Ant Design", "dark": "Dark", "light": "Light", "wechat": "WeChat"},
        path: cdn
      },
      hljs:{
        enable: true,
        lineNumber: true,
        style: hljs_theme, //代码风格：https://xyproto.github.io/splash/docs/longer/all.html
      },
      actions: ["desktop"]
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
      on_save(value)
    }
  })

}



function on_save(md: string) {
  content.value = md
  save()
  console.log('保存成功: '+content.value)
}

var save = function save() {
  content.value = vditor.value.getValue()
  console.log(content.value)
  blog.value!.content = content.value

  if (blog.value.id == -1){
    blog.value!.create_time = "2024-07-05T13:30:00.000Z"
    blog.value!.update_time = "2024-07-05T13:30:00.000Z"
    addBlog(<Blog>blog.value).then((res)=>{
      console.log("add success: " + res)
      blog.value!.id = res.id
    }).catch(()=>{

    }).finally(()=>{

    });
  }else{

    updateBlog(<Blog>blog.value!).then((res)=>{
      console.log("update success: " + res)
    }).catch(()=>{

    }).finally(()=>{

    });
  }

}

var change_theme = function() {
  isDark.value = !isDark.value;
  vditor.value.setTheme(
      isDark.value? "dark":"classic",
      isDark.value? "dark":"wechat",
      isDark.value? "dracula":"github");
}


function handleClick(action: string) {
  const fun = eval(action);
  new fun()

}

</script>

<template>
  <div class="editor_box">
    <div class="editor_navs">
      <div class="editor_nav_item" v-for="item in btns" @click="handleClick(item.click)">
        <span>{{item.title}}</span>
      </div>
    </div>
    <div id="vditor"></div>
  </div>

</template>

<style scoped>
.editor_box{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.editor_navs{
  width: 70%;
  height: 40px;
  line-height: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: right;
}

.editor_nav_item{
  text-decoration: none;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 5px;
  display: inline-block;
}

.editor_nav_item:hover{
  color: #747bff;
}
</style>