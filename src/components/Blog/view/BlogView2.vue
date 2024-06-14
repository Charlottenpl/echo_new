<script setup lang="ts">
import 'vditor/dist/method.min'
import {onMounted} from "vue";
import Vditor from "vditor";
import "vditor/src/assets/less/index.less"
import BlogTitle from "./BlogTitle.vue";


onMounted(() => {
  fetch("/2404.md").then(
      response => response.text()
  ).then(markdown => {
    console.log("加载成功" + markdown)
    const docAsUnknown = document as unknown;
    const doc = docAsUnknown as HTMLElement;
    Vditor.mermaidRender(doc as HTMLElement, `https://unpkg.com/vditor@3.10.3`, "dark")
    Vditor.preview(doc.querySelector('#markdown-preview')!, markdown, {
      // https://ld246.com/article/1549638745630#static-methods
      mode: "dark",
      anchor: 1,
      theme: {
        //自定义主题的话应该是把path改成自己的url，然后list写url下面有哪些css主题文件，然后current写当前使用的主题是哪个
        current: "dark",
        list: {"ant-design": "Ant Design", "dark": "Dark", "light": "Light", "wechat": "WeChat"},
        path: "https://unpkg.com/vditor@3.10.3/dist/css/content-theme"
      },
      hljs: {
        enable: true,
        lineNumber: true,
        style: "dracula", //代码风格：https://xyproto.github.io/splash/docs/longer/all.html
      },
      after() {
        if (window.innerWidth <= 768) {
          return
        }
        initOutline()
      },
    })
  })


})


const initOutline = () => {
  const headingElements: any[] = []
  const outlineElement = document.getElementById('markdown-toc')
  let count = 0;
  Array.from(document.getElementById('markdown-preview')!.children).forEach((item) => {
    if (item.tagName.length === 2 && item.tagName !== 'HR' && item.tagName.indexOf('H') === 0) {
      headingElements.push(item)
      console.log(item.textContent)
      //设置id
      item.id = "toc-link" + count
      count++
      // 创建一个新的 <a> 标签
      var link = document.createElement('a');
      link.classList.add("toc_link_a") //无效，因为vue渲染之后class名字已经变了
      // link.setAttribute("style", "cursor: pointer")

      // 为每个目录项添加点击事件监听器
      link.addEventListener('click', function (event) {
        // 阻止链接默认的导航行为
        event.preventDefault();

        // 滚动到目标元素
        const preView = document.getElementById('markdown-preview');
        const targetElement = document.getElementById(item.id);

        preView!.scrollTop = targetElement!.offsetTop - 40;
      });


      if (item.textContent) {
        if (item.textContent.length > 15) {
          link.textContent = item.textContent.slice(0, 15) + "..."
        } else {
          link.textContent = item.textContent
        }

      } else {
        link.textContent = "undefind"
      }

      outlineElement!.appendChild(link);
    }
  })
}

</script>


<template>
<!--
  视图结构
  main：父视图，使用flex布局，并且方向为竖向
  nav： 包含标题导航栏等信息，使用粘性布局
  content：正文，长度不限，需要想办法隐藏滚动条
  foot：底部内容，包含评论等信息

  toc：目录，和nav一样粘性布局
-->
<!--  主视图-->
  <div class="main_view">
<!--    博客标题-->
    <BlogTitle id="nav"></BlogTitle>
    <!--      目录-->
    <div id="markdown-toc">
      <a id="markdown-toc_tmp_item" class="toc_link_a"> 目录</a>
    </div>
<!--    博客详情-->
    <div class="blog-detail">
<!--      文章内容-->
      <div id="markdown-preview"></div>

    </div>

  </div>
</template>

<style scoped>
/**
  position定位
  1. static: 简单的文档流，默认就是这个
  2. relative: 相对定位，相对与原本位置，不脱离文档流
  3. absolute: 绝对定位，相对于除static以外的第一个父元素进行定位，脱离文档流
  4. fixed: 相对于浏览器窗口位置固定，比如Top按钮
  5. sticky: 粘性布局，当处于窗口中时时relative属性，当滑动到快消失时是fixed

 */
.main_view {
  width: 100vw;
  padding: 0px;
  padding-top: 60px;
  margin: 0px;
  position: relative;
}

.main_view::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}


#nav{
  position: fixed;
  height: 50px;
  width: 100%;
  background: #2f363d;
  text-align: center;
  z-index: 999;
  top: 0px;
}

.blog-detail {

}

#markdown-toc {
  width: 230px;
  position: sticky;
  top: 250px;
}

/* !!!! v-deep渗透,告诉 Vue 忽略样式作用域的限制，允许接下来的选择器影响到子组件    */
:deep(.toc_link_a) {
  color: #3b3b3b;
  cursor: pointer !important;
}

#markdown-preview {
  box-sizing: border-box; /* 即使元素有内边距，它的总宽度也不会超过设定的宽度(仅父组件100%，且设置padding有用) */
  background: #222122FF;
  padding: 10px 40px;
  max-width: 1000px;
  word-break: break-all;
}

#markdown-preview::-webkit-scrollbar {
  display: none;
}


/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  /* !!!! v-deep渗透,告诉 Vue 忽略样式作用域的限制，允许接下来的选择器影响到子组件    */
  :deep(.toc_link_a) {
    color: #d2d7e3;
  }
}
</style>