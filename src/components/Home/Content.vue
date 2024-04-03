<script setup lang="ts">
import {echoed} from "../../stores/maind";
import Summary from "./Summary.vue";
import Tags from "./Tags.vue";
import Classification from "./Classification.vue";

const data = echoed()

let blogs = data.test.blogs
</script>

<template>
  <main class="main">


      <!-- 导航栏 -->
      <div class="nav">

      </div>

      <!-- summary -->
    <div class="main-panel">
      <div class="summarys">
        <Summary v-for="blog in blogs" :title="blog.title" :description="blog.description"/>
      </div>

      <div class="modules"> <!--tag、分类等模块-->
        <Classification class="tags"/>
        <Tags class="tags"/>
      </div>
    </div>


  </main>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
}

.nav{
  display: block;
  width: 100%;
  height: 80px;
  background: #646cff;
}

.main-panel {
  /* 其他样式 */
  display: flex;
  flex-wrap: wrap;
}

.summarys {
  overflow-y: auto; /* 或 overflow: auto; 如果需要同时考虑水平和垂直滚动 */
  scrollbar-width: none; /* 针对Firefox等支持该属性的浏览器 */
  -ms-overflow-style: none; /* 针对IE/Edge */

  /* Webkit内核浏览器（如Chrome、Safari）隐藏滚动条 */

  &::-webkit-scrollbar {
    width: 0; /* 隐藏水平滚动条 */
    height: 0; /* 隐藏垂直滚动条 */
  }

  flex: 5;
  margin: 10px;
}

.tags {
  width: 80%;
  margin: 10px;
  margin-bottom: 20px;
}

.modules {
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-top: 30px;
}
</style>