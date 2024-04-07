<script setup lang="ts">
import {echoed} from "../../stores/maind";
import Summary from "./Summary.vue";
import Tags from "./Tags.vue";
import Classification from "./Classification.vue";
import {onBeforeMount, onMounted, ref} from "vue";
import HomeNav from "./HomeNav.vue";

const data = echoed()

let blogs = data.test.blogs

const isModules = ref(true)
const box_width = ref(500)

onMounted(() => {

  console.log("init")
  isModules.value = window.innerWidth > 1400
  boxWidth()

  window.addEventListener('resize', () => {
    isModules.value = window.innerWidth > 1400
    console.log(isModules)
    boxWidth()
  })
})

function boxWidth() {
  let divWidth = document.getElementById("big_box").clientWidth;
  let n = Math.floor(divWidth / 800)
  box_width.value = divWidth / n -2 //需要减掉边框宽度不然会出bug（放不下会转到下一行）
  console.log(divWidth + " n: " + n + " width: " + box_width.value)
}
</script>

<template>
  <div class="content_main">
    <HomeNav class="nav"/>

    <main style="display: flex; flex-direction: row; height: 90%; ">
      <div class="summarys" id="big_box">
        <Summary class="summary" :style="{ width: box_width + 'px' }" v-for="blog in blogs" :id="blog.id"
                 :title="blog.title" :description="blog.description"/>
      </div>

      <div v-show="isModules" class="modules"> <!--tag、分类等模块-->
        <Classification class="tags"/>
        <Tags class="tags"/>
      </div>
    </main>
  </div>

</template>

<style scoped>
.content_main {
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  width: 920px;
}

.nav {
  height: 60px;
  margin-right: 5%;

}

.main-panel {
  /* 其他样式 */
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
}

.summarys {
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
  margin: 20px;
}

.summary {
  border-bottom: 1px dashed #d2d9e8;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.tags {
  width: 160px;
  margin: 10px;
  margin-bottom: 20px;
}

.modules {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
</style>