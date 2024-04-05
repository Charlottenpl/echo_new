<script setup lang="ts">
import {echoed} from "../../stores/maind.ts";
import Search from "./Search.vue";

const data = echoed()
let navs = data.navs
</script>

<template>
  <div class="nav_main">

    <div v-for="item in navs" class="nav_item">
      {{item.title}}
    </div>


    <Search/>
  </div>
</template>

<style scoped>
.nav_main{
  line-height: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: end;

}

.nav_item{
  margin-right: 3%;
  text-align: end;
}
</style>