<script setup lang="ts">
import {echoed} from "../../stores/maind";

const data = echoed()
</script>

<template>
  <div class="tag_name">
    分类
  </div>
  <div v-for="item in data.test.tags" class="tags">
    <div>
      {{item}}
    </div>
  </div>
</template>

<style scoped>
.tags{

}

.tag_name{
  border-radius: 10px;
}
</style>