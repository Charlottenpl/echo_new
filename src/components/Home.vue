<script setup lang="ts">
import Aside from "./Home/Aside.vue";
import {ref, onMounted} from 'vue';
import HomeNav from "./Home/HomeNav.vue";



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
      <Aside class="aside-panel" v-show="isAsideVisible"/>

      <div class="content-panel">
        <HomeNav class="nav"/>
        <!--路由页面-->
        <router-view class="content-view"/>
      </div>

      <!--      <Content class="content-panel"/>-->
    </div>
  </div>
</template>

<style scoped>
.home-container {
  background: linear-gradient(to top, rgb(255, 255, 255), rgb(247, 249, 252), rgb(242, 246, 252), rgb(223, 232, 252)); /*好网站：https://hypercolor.dev!*/
  /*background: linear-gradient(to right, rgb(255, 228, 230), rgb(204, 251, 241));*/
  box-sizing: border-box; /* 即使元素有内边距，它的总宽度也不会超过设定的宽度(仅父组件100%，且设置padding有用) */
  width: 100vw; /* 使用视口宽度单位 */
  height: 100vh; /* 使用视口高度单位 */
  margin: 0; /* 移除默认的 margin */

  /*
  overflow: auto; !* 如果内容超出屏幕大小，允许滚动 *!
  */
}

.home{
  overflow:hidden; /*子view会遮挡div的圆角所以加上这个*/
  float: left;
  border-radius: 6px; /* 为元素添加圆角，半径为 10px */
  display: inline-flex; /*水平排列*/
  flex-direction: row; /* 子元素将水平排列 */
  width: 95%;
  height: 100%;
}

.nav {
  height: 30px;
  margin-top: 20px;
}

.aside-panel {
  position: relative; /* 必须设置定位属性 */
  z-index: 1; /* 设置一个较高的 z-index 值 */
  flex: 0 0 280px; /* 固定左侧面板的宽度 */
  margin-right: 20px;
  /*box-shadow: 10px 0 15px -5px rgba(0, 0, 0, 0.15); !* 向右下方的阴影 *!*/
}

.content-panel {
  display: flex;
  flex-direction: column;

  flex: 1; /* 占据剩余空间 */
}

.content-view{
  overflow: auto;
}

/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  .home-container {
    /*background: linear-gradient(to top, rgb(19, 19, 27), rgb(19, 19, 27), rgb(40, 48, 75), rgb(56, 69, 112)); /*好网站：https://hypercolor.dev!*/
    background: #00000000;
  }
}
</style>
