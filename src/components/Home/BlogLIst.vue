<script setup lang="ts">
import {defineComponent, ref} from 'vue'
import SortArticle from "../common/sortArticle.vue";
import {echoed} from "../../stores/maind.ts";
import {getArticle} from "../../api/article.ts";
import {getBlogFromRes} from "../../bean/Blog.ts";

const data = echoed()

const blogList = ref()


/**------------------------ api methods -------------------------------*/

function getArticleById(id: number){

  var params = {
    id : id,
    password : ""
  }

  getArticle({data: params}).then((res)=>{
    if (!vue.$common.isEmpty(res.message.Content)) {
      blog.value = getBlogFromRes(res.message);
      // 最新文章列表
      // this.getNews();
      mdArticle(blog.value.content)
    }else{
      var placeholderMD = "> Sorry! error: article is empty."
      mdArticle(placeholderMD)
    }
  }).catch((error) => {
    console.log(error)
    var placeholderMD = "> Sorry! error: " + error
    mdArticle(placeholderMD)
  });

}

/**--------------------------------------------------------------------*/


</script>

<template>
  <div v-for="(sort, index) in sortInfo" :key="index">
    <div >
      <div class="sort-article-first">
        <div>
          <svg viewBox="0 0 1024 1024" width="20" height="20"
               style="vertical-align: -2px;margin-bottom: -2px">
            <path
                d="M367.36 482.304H195.9936c-63.3344 0-114.6368-51.3536-114.6368-114.6368V196.2496c0-63.3344 51.3536-114.6368 114.6368-114.6368h171.4176c63.3344 0 114.6368 51.3536 114.6368 114.6368V367.616c0 63.3344-51.3536 114.688-114.688 114.688zM367.36 938.752H195.9936c-63.3344 0-114.6368-51.3536-114.6368-114.6368v-171.4176c0-63.3344 51.3536-114.6368 114.6368-114.6368h171.4176c63.3344 0 114.6368 51.3536 114.6368 114.6368v171.4176c0 63.3344-51.3536 114.6368-114.688 114.6368zM828.672 938.752h-171.4176c-63.3344 0-114.6368-51.3536-114.6368-114.6368v-171.4176c0-63.3344 51.3536-114.6368 114.6368-114.6368h171.4176c63.3344 0 114.6368 51.3536 114.6368 114.6368v171.4176c0 63.3344-51.3024 114.6368-114.6368 114.6368zM828.672 482.304h-171.4176c-63.3344 0-114.6368-51.3536-114.6368-114.6368V196.2496c0-63.3344 51.3536-114.6368 114.6368-114.6368h171.4176c63.3344 0 114.6368 51.3536 114.6368 114.6368V367.616c0 63.3344-51.3024 114.688-114.6368 114.688z"
                fill="#FF623E"></path>
          </svg>
          {{sort.name}}
        </div>
        <div class="article-more" @click="$router.push({path: '/sort', query: {sortId: sort.id}})">
          <svg viewBox="0 0 1024 1024" width="20" height="20"
               style="vertical-align: -2px;margin-bottom: -2px">
            <path
                d="M347.3 897.3H142.2c-30.8 0-51.4-31.7-38.9-59.9l136.1-306.1c4.9-11 4.9-23.6 0-34.6L103.3 190.6c-12.5-28.2 8.1-59.9 38.9-59.9h205.1c16.8 0 32.1 9.9 38.9 25.3l151.4 340.7c4.9 11 4.9 23.6 0 34.6L386.3 872.1c-6.9 15.3-22.1 25.2-39 25.2z"
                fill="#009F72"></path>
            <path
                d="M730.4 897.3H525.3c-30.8 0-51.4-31.7-38.9-59.9l136.1-306.1c4.9-11 4.9-23.6 0-34.6L486.4 190.6c-12.5-28.2 8.1-59.9 38.9-59.9h205.1c16.8 0 32.1 9.9 38.9 25.3l151.4 340.7c4.9 11 4.9 23.6 0 34.6L769.3 872.1c-6.8 15.3-22.1 25.2-38.9 25.2z"
                fill="#F9DB88"></path>
          </svg>
          MORE
        </div>
      </div>
      <sortArticle :articleList="sortArticles[sort.id]"></sortArticle>
    </div>
  </div>
</template>

<style scoped>

</style>