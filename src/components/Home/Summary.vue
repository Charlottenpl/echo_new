<script setup lang="ts">
import {useRouter} from "vue-router";

const item = defineProps<{
  id: number,
  title: string,
  description: string,
}>()

const route = useRouter()
function show_blog(id: number){
  //todo 显示 alert
  console.log("show blog: "+id)
  route.push(`/blog/`+id);

  // alert(`show blog ${id}.`)
}

</script>

<template>
  <div @click="show_blog(item.id)" style="padding: 20px">
    <div  class="blog_box">
      <div class="box">
        <span class="title">🌈 {{title}}</span>
        <span class="description">{{description}}</span>
        <span class="info">发表于 2022-03-14 02:20阅读：68评论：0推荐：0</span>
      </div>

      <div class="blog_img_box">
        <img src="../../assets/bg3.jpg" class="blog_img"/>
      </div>

    </div>


  </div>

</template>

<style scoped>
.blog_box{
  height: 280px;
  cursor: pointer;
  display: flex;
  flex-direction: row !important;
  flex-wrap: nowrap;
  align-items: flex-start;
  background: #dce6fd;
  min-width: 500px;
  overflow: hidden;
}

.blog_box:hover{
  border: 1px solid #d2d9e8;
}

.box{
  flex: 5 0 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: flex-start;
  padding: 50px;
}

.title{
  width: 100%;
  font-size: large;
  display: block;
  margin-bottom: 20px;
}

.description{
  flex: 1 0 0 ;
  color: #595959 !important;
  line-height: 21px;
  word-break: break-all;
  text-align: left;
  font-size: medium;
}

.info{
  font-size: small;
  align-self: flex-end;
  flex: 0 0 auto;
  color: #595959
}

.blog_img{
  flex: 4 0 0;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.blog_img_box{
  flex: 4 0 0;
  border-radius: 10px;
  height: 100%;
  max-width: 100%;
}

.blog_box:hover img{
  transform: scale(1.1); /* 鼠标悬停时放大1.1倍 */
  transition: all 0.5s ease 0s;
}

.blog_box img{
  transition: all 0.5s ease 0s;
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