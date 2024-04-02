<script setup lang="ts">
const item = defineProps<{
  title: string,
  description: number,
}>()

</script>

<template>
  <div class="box">
    <h3>{{title}}</h3>
    <span style="color: #242424">{{description}}</span>
  </div>
</template>

<style scoped>
.box{
  text-align: left;
  background-color: #eaeaea;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;

}
</style>