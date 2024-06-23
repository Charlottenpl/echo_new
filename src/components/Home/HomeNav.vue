<script setup lang="ts">
import {echoed} from "../../stores/maind";
import {getCurrentInstance, onBeforeMount, onMounted, onUnmounted, onUpdated, ref, watch} from "vue";

const data = echoed()
let navs = data.navs

// 获取全局方法，好麻烦
const cns = getCurrentInstance()
const vue = cns!.appContext.config.globalProperties


/**----------------------- return data -----------------------------------*/

const hoverEnter = ref(false) // 标识鼠标是否移入div
const scrollTop = ref(0)

/**----------------------------------------------------------------------*/



/**-------------------- life_circle methods ------------------------------*/

// 组件挂载之前
onBeforeMount(()=>{
  data.toolbar.enter = false
  data.toolbar.visible = true

  // this.getWebInfo();
  // this.getSysConfig();
  // this.getSortInfo();
  //
  // this.mobile = document.body.clientWidth < 1100;
  //
  // window.addEventListener('resize', () => {
  //   let docWidth = document.body.clientWidth;
  //   if (docWidth < 810) {
  //     this.mobile = true;
  //   } else {
  //     this.mobile = false;
  //   }
  // });
})

// 组件挂载完成
onMounted(()=>{
  data.webInfo.host = window.location.host;
  window.addEventListener('scroll', onScrollPage);
})


// await nextTick() 等待下一次DOM更新


// 因响应式状态变更而更新DOM时
onUpdated(()=>{

})


onUnmounted(()=>{
  window.removeEventListener('scroll', onScrollPage);
})


/**--------------------------------------------------------------------*/

function changeTheme() {

}

const onScrollPage = () => {
  scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
};

watch(scrollTop, (newValue, oldValue)=>{
  let enter = newValue > window.innerHeight / 2;
  data.toolbar.visible = newValue - oldValue < 0
  data.toolbar.enter = enter
})

</script>

<template>

  <div>
    <!-- el过渡动画 -->
    <transition name="el-fade-in-linear">
      <!-- 导航栏 -->
      <div v-show="data.toolbar.visible"
           @mouseenter="hoverEnter = true"
           @mouseleave="hoverEnter = false"
           :class="[{ enter: data.toolbar.enter }, { hoverEnter: (hoverEnter || vue.$route.path === '/favorite' || vue.$route.path === '/travel') && !data.toolbar.enter }]"
           class="toolbar-content myBetween">
        <!-- 网站名称 -->
        <div class="toolbar-title">
          <span @click="$router.push({path: '/'})">{{data.webInfo.webName}}</span>
        </div>



        <!-- 导航列表 -->
        <div>



          <ul class="scroll-menu">

            <li v-for="item in navs">

              <div class="my-menu" v-if="item.id === 'theme'" @click="changeTheme">
                <span>{{ item.title }}</span>
              </div>

              <router-link v-else :to="item.url" class="my-menu">
                <div class="my-menu">
                  <span>{{ item.title }}</span>
                </div>
                </router-link>

            </li>

          </ul>
        </div>
      </div>
    </transition>

  </div>
</template>

<style scoped>

.toolbar-content a{
  text-decoration: none;
  color: var(--white);
  font-weight: bold;
}

.toolbar-content {
  width: 100%;
  height: 60px;
  color: var(--white);
  /* 固定位置，不随滚动条滚动 */
  position: fixed;
  z-index: 100;
  /* 禁止选中文字 */
  user-select: none;
  transition: all 0.3s ease-in-out;
}

.toolbar-content.enter {
  background: var(--toolbarBackground);
  color: var(--toolbarFont);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
}

.toolbar-content.enter a{
  background: var(--toolbarBackground);
  color: var(--toolbarFont);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
}

.toolbar-content.hoverEnter {
  background: var(--translucent);
  box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
}

.toolbar-title {
  margin-left: 30px;
  font-family: 'TitleFont', sans-serif;
  font-size: 20px;
  cursor: pointer;
}

.toolbar-mobile-menu {
  font-size: 30px;
  margin-right: 15px;
  cursor: pointer;
}

.scroll-menu {
  margin: 0 25px 0 0;
  display: flex;
  justify-content: flex-end;
  padding: 0;
}

.scroll-menu li {
  list-style: none;
  margin: 0 12px;
  font-size: 17px;
  height: 60px;
  line-height: 60px;
  position: relative;
  cursor: pointer;
}

.scroll-menu li:hover .my-menu span {
  color: var(--themeBackground);
}

.scroll-menu li:hover .my-menu i {
  color: var(--themeBackground);
  animation: scale 1.5s ease-in-out infinite;
}

.scroll-menu li .my-menu:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  height: 6px;
  background-color: var(--themeBackground);
  width: 100%;
  max-width: 0;
  transition: max-width 0.25s ease-in-out;
}

.scroll-menu li:hover .my-menu:after {
  max-width: 100%;
}

.sortMenu {
  margin-left: 44px;
  font-size: 17px;
  position: relative;
}

.sortMenu:after {
  top: 32px;
  width: 35px;
  left: 0;
  height: 2px;
  background: var(--themeBackground);
  content: "";
  border-radius: 1px;
  position: absolute;
}

.el-dropdown {
  font-size: unset;
  color: unset;
}

.el-popper[x-placement^=bottom] {
  margin-top: -8px;
}

.el-dropdown-menu {
  padding: 5px 0;
}

.el-dropdown-menu__item {
  font-size: unset;
}

.el-dropdown-menu__item:hover {
  background-color: var(--white);
  color: var(--themeBackground);
}

.toolButton {
  position: fixed;
  right: 3vh;
  bottom: 3vh;
  animation: slide-bottom 0.5s ease-in-out both;
  z-index: 100;
  cursor: pointer;
  font-size: 25px;
  width: 30px;
}

.my-setting {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  cursor: pointer;
  font-size: 20px;
}

.my-setting i {
  padding: 5px;
}

.my-setting i:hover {
  color: var(--themeBackground);
}

.cd-top {
  background: var(--toTop) no-repeat center;
  position: fixed;
  right: 5vh;
  top: -900px;
  z-index: 99;
  width: 70px;
  height: 900px;
  background-size: contain;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.backTop {
  transition: all 0.3s ease-in;
  position: relative;
  top: 0;
  left: -13px;
}

.backTop:hover {
  top: -10px;
}

#outerImg {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  width: 100%;
  height: 100%;
  display: none;
}

@media screen and (max-width: 400px) {
  .toolButton {
    right: 0.5vh;
  }
}
</style>