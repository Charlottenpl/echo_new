<script setup lang="ts">
</script>

<template>
  <div class="user_header">
    <img class="user_img" src="/def.jpg" alt="头像"/>

    <div style="display: inline-block;height: 40px; text-align: left">
      <div class="name">
        Charlotte's blog
      </div>
    </div>
  </div>

</template>

<style scoped>
.name {
  font-size: medium;
  font-weight: bold;
  color: #3c4f60;
  font-family: 'TitleFont', sans-serif;
  line-height: 50px;
  text-align: center;
}

.user_header {
  margin: 30px 10px 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user_img {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4); /* 添加阴影 */
  border-radius: 12px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  .name {
    color: #d8e2f6;
  }
}
</style>