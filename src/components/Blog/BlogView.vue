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
        link.textContent = item.textContent.slice(0, 10)
      }else{
        link.textContent = "undefind"
      }

      outlineElement!.appendChild(link);
    }
  })
}

</script>


<template>

  <div class="blog-detail">
    <div id="markdown-toc">
      <a id="markdown-toc_tmp_item" class="toc_link_a"> 目录</a>
    </div>
    <div id="markdown-preview"></div>
  </div>
</template>

<style scoped>

.blog-detail {
  display: flex;
  flex-direction: row;
  padding: 20px;
  max-width: 1300px;
  width: 80vw;
  height: 100vh;
}

#markdown-toc {
  flex: 0 0 230px;
  display: flex;
  flex-direction: column;
}

/* !!!! v-deep渗透,告诉 Vue 忽略样式作用域的限制，允许接下来的选择器影响到子组件    */
:deep(.toc_link_a){
  color: #3b3b3b;
  cursor: pointer !important;
}

#markdown-preview {
  flex: 1 0 0;
  padding: 10px;
  max-width: 900px;
  word-break: break-all;
}

#markdown-preview::-webkit-scrollbar {
  display: none;
}


/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  /* !!!! v-deep渗透,告诉 Vue 忽略样式作用域的限制，允许接下来的选择器影响到子组件    */
  :deep(.toc_link_a){
    color: #a3a3a3;
  }
}
</style>