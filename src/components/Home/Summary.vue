<script setup lang="ts">
const item = defineProps<{
  title: string,
  description: number,
}>()

</script>

<template>
  <div class="box">
    <h3>{{title}}</h3>
    <span class="description">{{description}}</span>
  </div>
</template>

<style scoped>
.box{
  text-align: left;
  background-color: #f1f7ff77;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid #3b445a;
}

.description{
  color: #3b445a;
}

/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  .box{
    background-color: #323a53;
    border: 1px solid #89929f44;
  }

  .description{
    color: #fafcff;
  }
}
</style>