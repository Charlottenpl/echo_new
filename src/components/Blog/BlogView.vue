<script setup lang="ts">
import 'vditor/dist/method.min'
import {onMounted} from "vue";
import Vditor from "vditor";

const md = "## hello \n hi im charlotte";
onMounted(()=>{
  const docAsUnknown = document as unknown;
  const doc = docAsUnknown as HTMLElement;
  Vditor.mermaidRender(doc as HTMLElement,  `https://unpkg.com/vditor@3.10.3`, "dark")
  Vditor.preview(doc.querySelector('#markdown-preview')!, md, {
    // https://ld246.com/article/1549638745630#static-methods
    mode: "dark",
    anchor: 0,
    theme: {
      //自定义主题的话应该是把path改成自己的url，然后list写url下面有哪些css主题文件，然后current写当前使用的主题是哪个
      current: "dark",
      list: {"ant-design": "Ant Design", "dark": "Dark", "light": "Light", "wechat": "WeChat"},
      path: "https://unpkg.com/vditor@3.10.3/dist/css/content-theme"
    },
  })
})
</script>

<template>
  <div class="blog-detail">
    <div id="markdown-preview"></div>
  </div>
</template>

<style scoped>
.blog-detail {
  padding: 20px;
}
</style>