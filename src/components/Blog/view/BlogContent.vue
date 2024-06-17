<script setup lang="ts">
import {onMounted} from "vue";
import Vditor from "vditor";

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
      },
    })
  })


})
</script>

<template>
  <div id="markdown-preview"></div>
</template>

<style scoped>
#markdown-preview {
  box-sizing: border-box; /* 即使元素有内边距，它的总宽度也不会超过设定的宽度(仅父组件100%，且设置padding有用) */
  background: #222122FF;
  padding: 10px 40px;
  max-width: 900px;
  height: 97vh;
  word-break: break-all;
}

#markdown-preview::-webkit-scrollbar {
  display: none;
}

</style>