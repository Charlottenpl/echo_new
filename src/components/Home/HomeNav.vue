<script setup lang="ts">
import {echoed} from "../../stores/maind";

const data = echoed()
let navs = data.navs

function click_btn(item: any) {
  console.log(item.title)
  // alert(item.title)
}

</script>

<template>
  <div class="nav_main">
    <div v-for="item in navs" class="nav_item" @click="click_btn(item)">
      <router-link :to="item.url" class="nav-item-route">{{ item.title }}</router-link>
    </div>
<!--    <Search/>-->
  </div>
</template>

<style scoped>
.nav_main {
  line-height: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: end;

}

.nav_item {
  cursor: pointer;
  padding: 5px 20px;
  border-radius: 20px;
  margin-right: 1%;
  text-align: end;
}

.nav-item-route{
  color: #1a1a1a;
}

.nav_item:hover {
  background: #d2d9e899;
}

/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  .nav-item-route{
    color: #efefef;
  }

  .nav_item:hover {
    background: #d2d9e833;
  }
}
</style>