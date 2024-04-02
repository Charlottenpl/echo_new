<script setup lang="ts">
import {echoed} from "../../stores/maind";
import Summary from "./Summary.vue";
import Tags from "./Tags.vue";
const data = echoed()

let blogs = data.test.blogs
</script>

<template>
  <main class="main-panel">
    <div class="summarys">
      <Summary v-for="blog in blogs" :title="blog.title" :description="blog.description"/>
    </div>

    <div class="tags">
      <Tags/>
    </div>

  </main>
</template>

<style scoped>
.main-panel {
  overflow-y: auto; /* 或 overflow: auto; 如果需要同时考虑水平和垂直滚动 */
  scrollbar-width: none; /* 针对Firefox等支持该属性的浏览器 */
  -ms-overflow-style: none; /* 针对IE/Edge */

  /* Webkit内核浏览器（如Chrome、Safari）隐藏滚动条 */
  &::-webkit-scrollbar {
    width: 0; /* 隐藏水平滚动条 */
    height: 0; /* 隐藏垂直滚动条 */
  }

  /* 其他样式 */
  display: flex;
}

.summarys{
  flex: 3;
  width: 70%;
  margin: 10px;
}
.tags{
  flex: 1;
  margin: 10px;
  margin-top: 20px;
}
</style>