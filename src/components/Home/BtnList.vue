<script setup lang="ts">
import {echoed} from "../../stores/maind.ts";

const data = echoed()

let btns = data.btns

function click_btn(id: string) {
  alert("click"+id)
}
</script>

<template>
  <div class="btn_list_box">
    <div class="btn_item" v-for="item in btns" @click="click_btn(item.id)">
      {{item.title}}
    </div>
  </div>
</template>

<style scoped>
.btn_list_box{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: stretch;
}

.btn_item{
  cursor: pointer;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 60px;
}

.btn_item:hover{
  color: #1a1a1a;
  background: #d2d9e8;
}

/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  .btn_item:hover{
    color: #1a1a1a;
    background: #d2d9e8aa;
  }
}
</style>