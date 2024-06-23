<script setup lang="ts">
import UserInfo from "./UserInfo.vue";
import BtnList from "./BtnList.vue";

</script>

<template>
  <aside class="aside-panel">
    <UserInfo/>
    <BtnList style="margin-top: 50px"/>
  </aside>
</template>

<style scoped>
.aside-panel {
  text-align: left;
  transition: all 0.5s ;
  background: linear-gradient(to top, rgb(240, 243, 246), rgb(233, 237, 246), rgb(216, 226, 246));
  box-shadow: 10px 0 20px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  /*border-right: 1px solid #dedede; !* 右边框 *!*/
  overflow-y: auto; /* 如果内容超出，允许垂直滚动 */
  border-radius: 20px;
}


/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  .aside-panel {
    /**background: linear-gradient(to top, rgb(35, 34, 34), rgb(35, 34, 34), rgb(42, 43, 49), rgb(42, 42, 44)); */
  }
}
</style>