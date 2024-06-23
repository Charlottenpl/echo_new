<script setup lang="ts">
import {echoed} from "../../stores/maind.ts";
import {getCurrentInstance, ref} from "vue";
import Aside from "./Aside.vue";
import SortArticle from "../common/sortArticle.vue";
import {get as articleList} from "../../api/article.ts"


// 获取全局方法，好麻烦
const cns = getCurrentInstance()
const vue = cns!.appContext.config.globalProperties
const data = echoed();

const printerInfo = ref()

const SUCCESS = 0
const FAIL = 1
const imageState = ref(SUCCESS)
const imageUrl = ref("/article_def.png")
const showAside = ref(true);
const sortInfo = ref([
  {
    id: 0,
    name: 'test'
  },
  {
    id: 0,
    name: 'test'
  },
  {
    id: 0,
    name: 'test'
  },
  {
    id: 0,
    name: 'test'
  },
])
const sortArticles = ref([
    [
      {
        id:0,
        articleCover:'/small_def.jpg',
        hasVideo: true,
        createTime: "2024-06-15 02:14:32",
        articleTitle: 'title',
        viewCount: 9743,
        commentCount: 234,
        likeCount: 235,
        articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
        sortId: 23,
        sort:{
          sortName: 'sortName'
        },
        labelId: 44,
        label: {
          labelName: 'labelName'
        }
      },
      {
        id:1,
        articleCover:'/small_def.jpg',
        hasVideo: true,
        createTime: "2024-06-15 02:14:32",
        articleTitle: 'title',
        viewCount: 9743,
        commentCount: 234,
        likeCount: 235,
        articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
        sortId: 23,
        sort:{
          sortName: 'sortName'
        },
        labelId: 44,
        label: {
          labelName: 'labelName'
        }
      },
      {
        id:0,
        articleCover:'/small_def.jpg',
        hasVideo: true,
        createTime: "2024-06-15 02:14:32",
        articleTitle: 'title',
        viewCount: 9743,
        commentCount: 234,
        likeCount: 235,
        articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
        sortId: 23,
        sort:{
          sortName: 'sortName'
        },
        labelId: 44,
        label: {
          labelName: 'labelName'
        }
      },
      {
        id:1,
        articleCover:'/small_def.jpg',
        hasVideo: true,
        createTime: "2024-06-15 02:14:32",
        articleTitle: 'title',
        viewCount: 9743,
        commentCount: 234,
        likeCount: 235,
        articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
        sortId: 23,
        sort:{
          sortName: 'sortName'
        },
        labelId: 44,
        label: {
          labelName: 'labelName'
        }
      },
      {
        id:0,
        articleCover:'/small_def.jpg',
        hasVideo: true,
        createTime: "2024-06-15 02:14:32",
        articleTitle: 'title',
        viewCount: 9743,
        commentCount: 234,
        likeCount: 235,
        articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
        sortId: 23,
        sort:{
          sortName: 'sortName'
        },
        labelId: 44,
        label: {
          labelName: 'labelName'
        }
      },
      {
        id:1,
        articleCover:'/small_def.jpg',
        hasVideo: true,
        createTime: "2024-06-15 02:14:32",
        articleTitle: 'title',
        viewCount: 9743,
        commentCount: 234,
        likeCount: 235,
        articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
        sortId: 23,
        sort:{
          sortName: 'sortName'
        },
        labelId: 44,
        label: {
          labelName: 'labelName'
        }
      },
    ],
  [
    {
      id:0,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:1,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:0,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:1,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:0,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:1,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
  ],
  [
    {
      id:0,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:1,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:0,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:1,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:0,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:1,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
  ],
  [
    {
      id:0,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:1,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:0,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:1,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:0,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
    {
      id:1,
      articleCover:'/small_def.jpg',
      hasVideo: true,
      createTime: "2024-06-15 02:14:32",
      articleTitle: 'title',
      viewCount: 9743,
      commentCount: 234,
      likeCount: 235,
      articleContent: '点击短信登录界面的close按钮之后Loading不消失（一定情况必现）',
      sortId: 23,
      sort:{
        sortName: 'sortName'
      },
      labelId: 44,
      label: {
        labelName: 'labelName'
      }
    },
  ],
])

/**------------------------ api methods -------------------------------*/

function getClassList(){

  let params = {

  }

  classList({data: params}).then((res)=>{
    // 检查数据是否为空
    if (!vue.$common.isEmpty(res.data)) {
      // TODO list
    }
  }).catch((error) => {
    console.log(error)
  });

}

function getArticleList(){

  let params = {

  }

  articleList({data: params}).then((res)=>{
    // 检查数据是否为空
    if (!vue.$common.isEmpty(res.data)) {
      // TODO list
    }
  }).catch((error) => {
    console.log(error)
  });

}

/**--------------------------------------------------------------------*/


/**-------------------- listener methods ------------------------------*/
function handleImageLoad() {
  // 处理图片加载成功的逻辑（如果需要）
  imageState.value = SUCCESS
}
function handleImageError() {
  imageState.value = FAIL; // 设置图片加载失败的标记
}

/**--------------------------------------------------------------------*/


</script>

<template>
  <!-- 首页图片 -->
  <div class="">
    <img
        v-if="imageState == SUCCESS "
        class="background-image-index"
        style="object-fit: cover; animation: 2s ease 0s 1 normal none running header-effect;height: 50vh;"
        @load="handleImageLoad"
        @error="handleImageError"
        :src="vue.$common.isEmpty(imageUrl)? '/article_def.png':imageUrl" alt="">

  </div>
  <!-- 首页文字 打字机特效 -->
  <div class="signature-wall myCenter my-animation-hideToShow">
<!--    标题-->
    <h1 class="playful">
      这个是标题
    </h1>

<!--    打字机-->
    <div class="printer" >
      <printer :printerInfo="printerInfo">
        <template slot="paper" slot-scope="scope">
          <h3>
            {{ data.webInfo.webTitle }}<span class="cursor">|</span>
          </h3>
        </template>
      </printer>
    </div>
    <div id="bannerWave1"></div>
    <div id="bannerWave2"></div>
    <i class="el-icon-arrow-down" @click="navigation('.page-container-wrap')"></i>
  </div>

  <!-- 首页内容 -->
  <div class="page-container-wrap">
    <div class="page-container">
<!--      左侧-->
      <div class="aside-content" v-if="showAside">
        <Aside ></Aside>
      </div>
<!--      右侧内容-->
      <div class="recent-posts">

<!--        ✨ 置顶通知内容-->
        <div class="announcement background-opacity">
          <i class="fa fa-volume-up" aria-hidden="true"></i> <!--图标-->
          内容
          <div>
            <div >
              notification
            </div>
          </div>
        </div>

        <div v-show="1 === 1">
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
        </div>

        <div v-show="indexType === 2">

<!--          文章列表-->
          <articleList :articleList="articles"></articleList>

        </div>
      </div>
    </div>
  </div>
  <!-- 页脚 -->
  <div style="background: var(--background)">
    <myFooter></myFooter>
  </div>
</template>

<style scoped>

.background-image-index {
  width: 100vw;
  height: 50vh;
  position: fixed;
  z-index: -1;
}

.background-image-index::before {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
  content: '';
}

.background-image-index-error {
  background-color: var(--lightGreen);
  width: 100vw;
  height: 50vh;
  position: fixed;
  z-index: -1;
}

.signature-wall {
  /* 向下排列 */
  display: flex;
  flex-direction: column;
  position: relative;
  user-select: none;
  height: 50vh;
  overflow: hidden;
}

.playful {
  color: var(--white);
  font-size: 40px;
}

.sort-article-first {
  margin: 40px auto 20px;
  display: flex;
  justify-content: space-between;
  color: var(--greyFont);
  border-bottom: 1px dashed var(--lightGray);
  padding-bottom: 5px;
}

.article-more {
  cursor: pointer;
  transition: all 0.3s;
}

.article-more:hover {
  color: var(--lightGreen);
  font-weight: 700;
  transform: scale(1.1);
}

/*.playful span {*/
/*  position: relative;*/
/*  color: #5362f6;*/
/*  text-shadow: 0.25px 0.25px #e485f8, 0.5px 0.5px #e485f8, 0.75px 0.75px #e485f8,*/
/*  1px 1px #e485f8, 1.25px 1.25px #e485f8, 1.5px 1.5px #e485f8, 1.75px 1.75px #e485f8,*/
/*  2px 2px #e485f8, 2.25px 2.25px #e485f8, 2.5px 2.5px #e485f8, 2.75px 2.75px #e485f8,*/
/*  3px 3px #e485f8, 3.25px 3.25px #e485f8, 3.5px 3.5px #e485f8, 3.75px 3.75px #e485f8,*/
/*  4px 4px #e485f8, 4.25px 4.25px #e485f8, 4.5px 4.5px #e485f8, 4.75px 4.75px #e485f8,*/
/*  5px 5px #e485f8, 5.25px 5.25px #e485f8, 5.5px 5.5px #e485f8, 5.75px 5.75px #e485f8,*/
/*  6px 6px #e485f8;*/
/*  animation: scatter 1.75s infinite;*/
/*  font-weight: normal;*/
/*}*/

/*.playful span:nth-child(2n) {*/
/*  color: #ed625c;*/
/*  text-shadow: 0.25px 0.25px #f2a063, 0.5px 0.5px #f2a063, 0.75px 0.75px #f2a063,*/
/*  1px 1px #f2a063, 1.25px 1.25px #f2a063, 1.5px 1.5px #f2a063, 1.75px 1.75px #f2a063,*/
/*  2px 2px #f2a063, 2.25px 2.25px #f2a063, 2.5px 2.5px #f2a063, 2.75px 2.75px #f2a063,*/
/*  3px 3px #f2a063, 3.25px 3.25px #f2a063, 3.5px 3.5px #f2a063, 3.75px 3.75px #f2a063,*/
/*  4px 4px #f2a063, 4.25px 4.25px #f2a063, 4.5px 4.5px #f2a063, 4.75px 4.75px #f2a063,*/
/*  5px 5px #f2a063, 5.25px 5.25px #f2a063, 5.5px 5.5px #f2a063, 5.75px 5.75px #f2a063,*/
/*  6px 6px #f2a063;*/
/*  animation-delay: 0.3s;*/
/*}*/

/*.playful span:nth-child(3n) {*/
/*  color: #ffd913;*/
/*  text-shadow: 0.25px 0.25px #6ec0a9, 0.5px 0.5px #6ec0a9, 0.75px 0.75px #6ec0a9,*/
/*  1px 1px #6ec0a9, 1.25px 1.25px #6ec0a9, 1.5px 1.5px #6ec0a9, 1.75px 1.75px #6ec0a9,*/
/*  2px 2px #6ec0a9, 2.25px 2.25px #6ec0a9, 2.5px 2.5px #6ec0a9, 2.75px 2.75px #6ec0a9,*/
/*  3px 3px #6ec0a9, 3.25px 3.25px #6ec0a9, 3.5px 3.5px #6ec0a9, 3.75px 3.75px #6ec0a9,*/
/*  4px 4px #6ec0a9, 4.25px 4.25px #6ec0a9, 4.5px 4.5px #6ec0a9, 4.75px 4.75px #6ec0a9,*/
/*  5px 5px #6ec0a9, 5.25px 5.25px #6ec0a9, 5.5px 5.5px #6ec0a9, 5.75px 5.75px #6ec0a9,*/
/*  6px 6px #6ec0a9;*/
/*  animation-delay: 0.15s;*/
/*}*/

/*.playful span:nth-child(5n) {*/
/*  color: #555bff;*/
/*  text-shadow: 0.25px 0.25px #e485f8, 0.5px 0.5px #e485f8, 0.75px 0.75px #e485f8,*/
/*  1px 1px #e485f8, 1.25px 1.25px #e485f8, 1.5px 1.5px #e485f8, 1.75px 1.75px #e485f8,*/
/*  2px 2px #e485f8, 2.25px 2.25px #e485f8, 2.5px 2.5px #e485f8, 2.75px 2.75px #e485f8,*/
/*  3px 3px #e485f8, 3.25px 3.25px #e485f8, 3.5px 3.5px #e485f8, 3.75px 3.75px #e485f8,*/
/*  4px 4px #e485f8, 4.25px 4.25px #e485f8, 4.5px 4.5px #e485f8, 4.75px 4.75px #e485f8,*/
/*  5px 5px #e485f8, 5.25px 5.25px #e485f8, 5.5px 5.5px #e485f8, 5.75px 5.75px #e485f8,*/
/*  6px 6px #e485f8;*/
/*  animation-delay: 0.4s;*/
/*}*/

/*.playful span:nth-child(7n) {*/
/*  color: #ff9c55;*/
/*  text-shadow: 0.25px 0.25px #ff5555, 0.5px 0.5px #ff5555, 0.75px 0.75px #ff5555,*/
/*  1px 1px #ff5555, 1.25px 1.25px #ff5555, 1.5px 1.5px #ff5555, 1.75px 1.75px #ff5555,*/
/*  2px 2px #ff5555, 2.25px 2.25px #ff5555, 2.5px 2.5px #ff5555, 2.75px 2.75px #ff5555,*/
/*  3px 3px #ff5555, 3.25px 3.25px #ff5555, 3.5px 3.5px #ff5555, 3.75px 3.75px #ff5555,*/
/*  4px 4px #ff5555, 4.25px 4.25px #ff5555, 4.5px 4.5px #ff5555, 4.75px 4.75px #ff5555,*/
/*  5px 5px #ff5555, 5.25px 5.25px #ff5555, 5.5px 5.5px #ff5555, 5.75px 5.75px #ff5555,*/
/*  6px 6px #ff5555;*/
/*  animation-delay: 0.25s;*/
/*}*/

.printer {
  cursor: pointer;
  color: var(--white);
  background: var(--translucent);
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

#bannerWave1 {
  height: 84px;
  background: var(--bannerWave1);
  position: absolute;
  width: 200%;
  bottom: 0;
  z-index: 10;
  animation: gradientBG 120s linear infinite;
}

#bannerWave2 {
  height: 100px;
  background: var(--bannerWave2);
  position: absolute;
  width: 400%;
  bottom: 0;
  z-index: 5;
  animation: gradientBG 120s linear infinite;
}

/* 光标 */
.cursor {
  margin-left: 1px;
  animation: hideToShow 0.7s infinite;
  font-weight: 200;
}

.el-icon-arrow-down {
  font-size: 40px;
  font-weight: bold;
  color: var(--white);
  position: absolute;
  bottom: 60px;
  animation: my-shake 1.5s ease-out infinite;
  z-index: 15;
  cursor: pointer;
}

.page-container-wrap {
  background: var(--background);
  position: relative;
}

.page-container {
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 1400px;
  padding: 0 20px 40px 20px;
  margin: 0 auto;
  flex-direction: row;
}

.recent-posts {
  width: 70%;
}

.announcement {
  padding: 22px;
  border: 1px dashed var(--lightGray);
  color: var(--greyFont);
  border-radius: 10px;
  display: flex;
  margin: 40px auto 40px;
}

.announcement i {
  color: var(--themeBackground);
  font-size: 22px;
  margin: auto 0;
  animation: scale 0.8s ease-in-out infinite;
}

.announcement div div {
  margin-left: 20px;
  line-height: 30px;
}

.aside-content {
  width: calc(30% - 40px);
  user-select: none;
  margin-top: 40px;
  margin-right: 40px;
  max-width: 300px;
  float: right;
}

.pagination-wrap {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.pagination {
  padding: 13px 15px;
  border: 1px solid var(--lightGray);
  border-radius: 3rem;
  color: var(--greyFont);
  width: 100px;
  user-select: none;
  cursor: pointer;
  text-align: center;
}

.pagination:hover {
  border: 1px solid var(--themeBackground);
  color: var(--themeBackground);
  box-shadow: 0 0 5px var(--themeBackground);
}

.push-title {
  font-weight: bold;
  font-size: 20px;
}

.push-el-image {
  width: 80%;
  min-height: 100px;
  max-height: 400px;
  border-radius: 15px;
  margin-top: 20px;
  margin-bottom: 30px;
}

.push-button {
  position: relative;
  background: var(--lightGreen);
  cursor: pointer;
  width: 230px;
  border-radius: 2rem;
  line-height: 35px;
  color: var(--white);
}

.push-button-title {
  margin-left: 20px;
  font-weight: bold;
}

.push-button-car {
  position: absolute;
  margin-left: 55px;
  animation: passing 4s linear infinite;
}

@media screen and (max-width: 1100px) {
  .recent-posts {
    width: 100%;
  }

  .page-container {
    width: 100%;
  }
}

@media screen and (max-width: 1000px) {

  .page-container {
    /* 文章栏与侧标栏垂直排列 */
    flex-direction: column;
  }

  .aside-content {
    width: 100%;
    max-width: unset;
    float: unset;
    margin: 40px auto 0;
  }
}

@media screen and (max-width: 768px) {

  h1 {
    font-size: 35px;
  }
}
</style>