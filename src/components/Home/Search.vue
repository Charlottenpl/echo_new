<script setup lang="ts">

</script>

<template>
  <div class="search_box">
    <input class="search_input"/>
    <button class="search_btn" type="submit" style="background: none"/>
  </div>
</template>

<style scoped>


.search_box{
  width: 200px;
  height: 30px;
  background: rgba(255, 255, 255, 0.35); /* 半透明背景 */
  backdrop-filter: blur(20px); /* 应用模糊效果 */
  border-radius: 15px; /* 可选的圆角 */
  box-shadow: 0 0 20px -5px rgba(205, 205, 205, 0.3);
  line-height: 30px;
  padding-left: 20px;
}
</style>