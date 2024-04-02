<script setup lang="ts">
import {echoed} from "../../stores/maind";

const data = echoed()

</script>

<template>
  <div class="user_header">
    <img class="user_img" :src="data.userInfo.img" alt="头像"/>

    <div style="display: inline-block;height: 40px; text-align: left">
      <div style="font-size: medium">
        两小无猜
      </div>
      <div style="color: #888888; font-size: small">
        https://www.blog.com/
      </div>
    </div>
  </div>

</template>

<style scoped>
.user_header{
  margin: 10px;
  text-align: center;
}

.user_img{
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4); /* 添加阴影 */
  border-radius: 12px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
}
</style>