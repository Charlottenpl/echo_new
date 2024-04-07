<script setup lang="ts">
const item = defineProps<{
  id: number,
  title: string,
  description: string,
}>()
function show_blog(id: number){
  //todo 显示 alert
  alert(`show blog ${id}.`)
}

</script>

<template>
  <div @click="show_blog(item.id)" class="blog_box">

    <div class="box">
      <span class="title">{{title}}</span>
      <span class="description">{{description}}</span>
      <span class="info">发表于 2022-03-14 02:20阅读：68评论：0推荐：0</span>
    </div>

    <img src="../../assets/blog_pre.jpeg" class="blog_img"/>
  </div>

</template>

<style scoped>
.blog_box{
  cursor: pointer;

  display: flex;
  flex-direction: row !important;
  flex-wrap: nowrap;
  padding: 30px;
  align-items: flex-start;
  background: #dce6fd;
  min-width: 500px;
}

.box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  margin-right: 20px;
}

.title{
  font-size: large;
  display: block;
  margin-bottom: 20px;
}

.description{
  color: #595959 !important;
  line-height: 21px;
  word-break: break-all;
  font-size: medium;
}

.info{
  font-size: small;
  align-self: flex-end;
  flex: 0 0 auto;
  color: #595959
}

.blog_img{
  width: 150px;
  height: 150px;
  border-radius: 10px;
}

/*---------------------------------------------- Dark Theme ----------------------------------------------------------*/

/* 深色主题 */
@media (prefers-color-scheme: dark) {
  .blog_box{
    background: #4f4f4f33;
  }
  .description{
    color: #a7a7a7 !important;
  }

  .info{
    color: #a7a7a7 !important;
  }
}
</style>