<script setup lang="ts">
import Aside from "./components/Home/Aside.vue";
import Content from "./components/Home/Content.vue";
import {ref, onMounted} from 'vue';

const isAsideVisible = ref(true)


onMounted(() => {
  isAsideVisible.value = window.innerWidth > 800

  window.addEventListener('resize', () => {
    isAsideVisible.value = window.innerWidth > 800
    console.log(isAsideVisible)
  })
})

</script>

<template>
  <div class="home-container">
    <div class="home">
      <Aside v-show="isAsideVisible"/>
      <Content/>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  background: #f3f3f3;
  /*background: linear-gradient(to right, rgb(241, 235, 238), rgb(236, 233, 239), rgb(222, 223, 234)); !*好网站：https://hypercolor.dev!*!*/
  /*background: linear-gradient(to right, rgb(255, 228, 230), rgb(204, 251, 241));*/
  box-sizing: border-box; /* 即使元素有内边距，它的总宽度也不会超过设定的宽度(仅父组件100%，且设置padding有用) */
  padding: 12px;
  width: 100vw; /* 使用视口宽度单位 */
  height: 100vh; /* 使用视口高度单位 */
  margin: 0; /* 移除默认的 margin */
  /*
  overflow: auto; !* 如果内容超出屏幕大小，允许滚动 *!
  */
}

.home{
  overflow:hidden; /*子view会遮挡div的圆角所以加上这个*/

  border-radius: 6px; /* 为元素添加圆角，半径为 10px */
  display: inline-flex; /*水平排列*/
  flex-direction: row; /* 子元素将水平排列 */
  width: 100%;
  height: 100%;
}

.aside-panel {
  position: relative; /* 必须设置定位属性 */
  z-index: 1; /* 设置一个较高的 z-index 值 */
  flex: 0 0 300px; /* 固定左侧面板的宽度 */
  margin-right: 20px;
  /*box-shadow: 10px 0 15px -5px rgba(0, 0, 0, 0.15); !* 向右下方的阴影 *!*/
}

.main-panel {
  position: relative; /* 必须设置定位属性 */
  z-index: 0; /* 设置一个较低的 z-index 值，确保它在元素-with-shadow 下方 */
  flex: 1; /* 占据剩余空间 */
}
</style>
