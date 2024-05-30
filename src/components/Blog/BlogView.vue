<script setup lang="ts">
import 'vditor/dist/method.min'
import {onMounted} from "vue";
import Vditor from "vditor";
import "vditor/src/assets/less/index.less"

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
      hljs:{
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
      item.id = "toc-link"+ count
      count++
      // 创建一个新的 <a> 标签
      var link = document.createElement('a');
      link.classList.add("toc_link_a") //无效，因为vue渲染之后class名字已经变了
      // link.setAttribute("style", "cursor: pointer")

      // 为每个目录项添加点击事件监听器
      link.addEventListener('click', function(event) {
        // 阻止链接默认的导航行为
        event.preventDefault();

        // 滚动到目标元素
        const preView = document.getElementById('markdown-preview');
        const targetElement = document.getElementById(item.id);

        preView!.scrollTop = targetElement!.offsetTop -20;
      });




      if (item.textContent){
        if (item.textContent.length > 15){
          link.textContent = item.textContent.slice(0, 15) + "..."
        }else{
          link.textContent = item.textContent
        }

      }else{
        link.textContent = "undefind"
      }

      outlineElement!.appendChild(link);
    }
  })
}

</script>


<template>
<div style="display: flex; flex-direction: column; align-items: center;height: 100%">

  <div style="flex: 0 0 30px">jl;sdkfj</div>

  <div class="blog-detail">
    <div id="markdown-preview"></div>

    <div id="markdown-toc">
      <a id="markdown-toc_tmp_item" class="toc_link_a"> 目录</a>
    </div>
  </div>

</div>
</template>

<style scoped>

.blog-detail {
  box-sizing: border-box; /* 即使元素有内边距，它的总宽度也不会超过设定的宽度(仅父组件100%，且设置padding有用) */
  justify-content: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  max-width: 1000px;
  width: 80vw;
  position: relative; /* 为markdown-toc的绝对定位提供上下文 */
}

#markdown-toc {
  width: 230px;
  display: flex;
  flex-direction: column;
  position: absolute; /* 使用绝对定位使其脱离文档流 */
  right: -230px; /* 置于右侧 */
  top:60px;
}

/* !!!! v-deep渗透,告诉 Vue 忽略样式作用域的限制，允许接下来的选择器影响到子组件    */
:deep(.toc_link_a){
  color: #3b3b3b;
  cursor: pointer !important;
}

#markdown-preview {
  box-sizing: border-box; /* 即使元素有内边距，它的总宽度也不会超过设定的宽度(仅父组件100%，且设置padding有用) */
  background: #222122FF;
  padding: 10px 40px;
  max-width: 900px;
  word-break: break-all;
}

#markdown-preview::-webkit-scrollbar {
  display: none;
}


::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}


/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  /* !!!! v-deep渗透,告诉 Vue 忽略样式作用域的限制，允许接下来的选择器影响到子组件    */
  :deep(.toc_link_a){
    color: #d2d7e3;
  }
}
</style>