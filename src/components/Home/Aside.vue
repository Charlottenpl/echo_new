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
  text-align: left;
  transition: all 0.5s ;
  background: linear-gradient(to top, rgb(240, 243, 246), rgb(233, 237, 246), rgb(216, 226, 246));;
  /*border-right: 1px solid #dedede; !* 右边框 *!*/
  height: 100vh; /* 完全显示在视口中 */
  padding: 1rem;
  overflow-y: auto; /* 如果内容超出，允许垂直滚动 */
}
</style>