<script setup lang="ts">
import {echoed} from "../../stores/maind";

const data = echoed()

</script>

<template>
  <div class="user_header">
    <img class="user_img" :src="data.userInfo.img" alt="头像"/>
    <div>

    </div>
  </div>

</template>

<style scoped>
.user_header{

}

.user_img{
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5); /* 添加阴影 */
  border-radius: 12px;
  width: 180px;
  height: 180px;
  margin: 10px;
}
</style>