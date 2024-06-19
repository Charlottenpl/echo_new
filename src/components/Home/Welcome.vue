<script setup lang="ts">

</script>

<template>
  <!-- 首页图片 -->
  <div class="el-image my-el-image article-image">
    <!-- 背景图片 -->
    <img v-if="imageState == SUCCESS "
        style="animation: header-effect 2s"
        class="background-image-index"
        v-once
        lazy
        :src="!$common.isEmpty($store.state.webInfo.backgroundImage)?$store.state.webInfo.backgroundImage:$store.state.webInfo.randomCover[Math.floor(Math.random() * $store.state.webInfo.randomCover.length)]"
        fit="cover">
    <!-- 错误显示的备用图片 -->
    <div v-else-if="imageState == FAIL" class="image-slot">
      <div class="article-image"></div>
    </div>

  </div>
  <!-- 首页文字 -->
  <div class="signature-wall myCenter my-animation-hideToShow">
    <h1 class="playful">
      <span v-for="(a, index) in $store.state.webInfo.webTitle" :key="index">{{a}}</span>
    </h1>
    <div class="printer" @click="getGuShi()">
      <printer :printerInfo="printerInfo">
        <template slot="paper" slot-scope="scope">
          <h3>
            {{ scope.content }}<span class="cursor">|</span>
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
      <div class="aside-content" v-if="showAside">
        <myAside @selectSort="selectSort" @selectArticle="selectArticle"></myAside>
      </div>
      <div class="recent-posts">
        <div class="announcement background-opacity">
          <i class="fa fa-volume-up" aria-hidden="true"></i>
          <div>
            <div v-for="(notice, index) in $common.pushNotification($store.state.webInfo.notices, true)" :key="index">
              {{ notice }}
            </div>
          </div>
        </div>

        <div v-show="indexType === 1">
          <div v-for="(sort, index) in sortInfo" :key="index">
            <div v-if="!$common.isEmpty(sortArticles[sort.id])">
              <div class="sort-article-first">
                <div>
                  <svg viewBox="0 0 1024 1024" width="20" height="20"
                       style="vertical-align: -2px;margin-bottom: -2px">
                    <path
                        d="M367.36 482.304H195.9936c-63.3344 0-114.6368-51.3536-114.6368-114.6368V196.2496c0-63.3344 51.3536-114.6368 114.6368-114.6368h171.4176c63.3344 0 114.6368 51.3536 114.6368 114.6368V367.616c0 63.3344-51.3536 114.688-114.688 114.688zM367.36 938.752H195.9936c-63.3344 0-114.6368-51.3536-114.6368-114.6368v-171.4176c0-63.3344 51.3536-114.6368 114.6368-114.6368h171.4176c63.3344 0 114.6368 51.3536 114.6368 114.6368v171.4176c0 63.3344-51.3536 114.6368-114.688 114.6368zM828.672 938.752h-171.4176c-63.3344 0-114.6368-51.3536-114.6368-114.6368v-171.4176c0-63.3344 51.3536-114.6368 114.6368-114.6368h171.4176c63.3344 0 114.6368 51.3536 114.6368 114.6368v171.4176c0 63.3344-51.3024 114.6368-114.6368 114.6368zM828.672 482.304h-171.4176c-63.3344 0-114.6368-51.3536-114.6368-114.6368V196.2496c0-63.3344 51.3536-114.6368 114.6368-114.6368h171.4176c63.3344 0 114.6368 51.3536 114.6368 114.6368V367.616c0 63.3344-51.3024 114.688-114.6368 114.688z"
                        fill="#FF623E"></path>
                  </svg>
                  {{sort.sortName}}
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
          <articleList :articleList="articles"></articleList>
          <div class="pagination-wrap">
            <div @click="pageArticles()" class="pagination" v-if="pagination.total !== articles.length">
              下一页
            </div>
            <div v-else style="user-select: none">
              ~~到底啦~~
            </div>
          </div>
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

</style>