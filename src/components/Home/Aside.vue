<script setup lang="ts">
import UserInfo from "./UserInfo.vue";

</script>

<template>
  <aside class="aside-panel">
    <UserInfo/>
    <BtnList/>
  </aside>
</template>

<style scoped>
.aside-panel {
  text-align: right;
  transition: all 0.5s ;
  background: linear-gradient(to right, rgb(243, 240, 240), rgb(239, 239, 239)); /* 背景色 */
  /*border-right: 1px solid #dedede; !* 右边框 *!*/
  height: 100vh; /* 完全显示在视口中 */
  padding: 1rem;
  overflow-y: auto; /* 如果内容超出，允许垂直滚动 */
}
</style>