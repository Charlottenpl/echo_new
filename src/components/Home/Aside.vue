<script setup lang="ts">
import UserInfo from "./UserInfo.vue";
import Search from "./Search.vue";

</script>

<template>
  <aside class="aside-panel">
    <UserInfo/>
    <Search/>
    <BtnList/>
  </aside>
</template>

<style scoped>
.aside-panel {
  text-align: left;
  transition: all 0.5s ;
  background: linear-gradient(to top, rgb(240, 243, 246), rgb(233, 237, 246), rgb(216, 226, 246));;
  /*border-right: 1px solid #dedede; !* 右边框 *!*/
  height: 100vh; /* 完全显示在视口中 */
  padding: 1rem;
  overflow-y: auto; /* 如果内容超出，允许垂直滚动 */
}


/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  .aside-panel {
    background: linear-gradient(to top, rgb(35, 34, 34), rgb(35, 34, 34), rgb(42, 43, 49), rgb(42, 42, 44));
  }
}
</style>