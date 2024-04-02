<script setup lang="ts">
import {echoed} from "../../stores/maind";

const data = echoed()

</script>

<template>
  <div class="user_header">
    <img class="user_img" :src="data.userInfo.img" alt="头像"/>
    <div style="font-size: medium">
      两小无猜
    </div>
    <div style="color: #888888; font-size: small">
      Charlottepllczy@gmail.com
    </div>


    <div>

    </div>

  </div>

</template>

<style scoped>
.user_header{
  margin: 10px;
}

.user_img{
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5); /* 添加阴影 */
  border-radius: 12px;
  width: 140px;
  height: 140px;
  margin-bottom: 10px;
}
</style>