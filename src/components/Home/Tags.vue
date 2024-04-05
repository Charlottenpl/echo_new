<script setup lang="ts">
import {echoed} from "../../stores/maind";

const data = echoed()
</script>

<template>

  <div>
    <div class="tag_name">
      标签
    </div>
    <div style="display: flex; flex-wrap: wrap;width: 80%">
      <div v-for="item in data.test.tags" id="tag_item">
        #{{ item }}
      </div>
    </div>
  </div>


</template>

<style scoped>

.tag_name {
  padding-left: 10px;
  color: #3a4359;
  border-left: 5px solid #3a4359;
  width: 70%;
  float: left;
  text-align: left;
  border-radius: 5px;
  display: block;
  margin-bottom: 10px;
}

#tag_item {
  cursor: pointer;
  font-size: small;
  margin: 5px;
  padding: 6px;
  color: #3a4359;
  border-radius: 5px;
  border: 1px solid #d2d9e8;
}

#tag_item:hover{
  color: #dfe8fc;
  background: #747bff;
  border: 1px solid #747bff;
}

/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  .tag_name {
    color: #d2d9e8;
    border-left: 5px solid #d2d9e8;
  }

  #tag_item {
    color: #d2d9e8;
    border: 1px solid #3a4359;
  }

}
</style>