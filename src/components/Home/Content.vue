<script setup lang="ts">
import {echoed} from "../../stores/maind";
import Summary from "./Summary.vue";
import Tags from "./Tags.vue";
import Classification from "./Classification.vue";
import {onMounted, ref} from "vue";
import HomeNav from "./HomeNav.vue";
const data = echoed()

let blogs = data.test.blogs

const isModules = ref(true)


onMounted(() => {
  isModules.value = window.innerWidth > 1000

  window.addEventListener('resize', () => {
    isModules.value = window.innerWidth > 1000
    console.log(isModules)
  })
})
</script>

<template>
  <div class="content_main">
    <HomeNav class="nav"/>

    <main style="display: flex; flex-direction: row; height: 90%; ">
      <div class="summarys" >
        <Summary class="summary" v-for="blog in blogs" :title="blog.title" :description="blog.description"/>
      </div>

      <div v-show="isModules" class="modules"> <!--tag、分类等模块-->
        <Classification class="tags"/>
        <Tags class="tags"/>
      </div>
    </main>
  </div>

</template>

<style scoped>
.content_main{
  display: flex;
  flex-direction: column;
  padding-right: 10px;
}

.nav{
  height: 60px;
  margin-right: 5%;
}

.main-panel {
  /* 其他样式 */
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
}

.summarys{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-content: flex-start;

  overflow-y: auto; /* 或 overflow: auto; 如果需要同时考虑水平和垂直滚动 */
  scrollbar-width: none; /* 针对Firefox等支持该属性的浏览器 */
  -ms-overflow-style: none; /* 针对IE/Edge */

  /* Webkit内核浏览器（如Chrome、Safari）隐藏滚动条 */
  &::-webkit-scrollbar {
    width: 0; /* 隐藏水平滚动条 */
    height: 0; /* 隐藏垂直滚动条 */
  }

  flex: 1;
  margin: 10px;
}

.summary{
  display: flex;
  flex-direction: column;
  min-width: 500px;
  flex-grow: 1;
}

.tags{
  width: 230px;
  margin: 10px;
  margin-bottom: 20px;
}

.modules{
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  padding-top: 30px;
  margin-right: 4%;
}
</style>