<script setup lang="ts">
import {echoed} from "../../stores/maind";
import Summary from "./Summary.vue";
import Tags from "./Tags.vue";
import Classification from "./Classification.vue";
const data = echoed()

let blogs = data.test.blogs
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <div class="nav">
      <div style="height: 50px">
        标签
      </div>
      <div style="height: 50px">
        分类
      </div>
    </div>
    <main class="main-panel">
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
  </div>

</template>

<style scoped>
.nav{
  display: flex;
  flex-wrap: nowrap;
  align-items: end;
  margin: 10px 10px 0 10px;
  height: 60px;
  border-radius: 20px;
  //background: #ffffff77;
}

.main-panel {
  /* 其他样式 */
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
}

.summarys{
  display: block;
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
.tags{
  width: 80%;
  margin: 10px;
  margin-bottom: 20px;
}

.modules{
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-top: 30px;
}
</style>