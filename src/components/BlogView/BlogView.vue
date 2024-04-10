<script setup lang="ts">

import {onBeforeMount, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const content = ref<string>("请在此处输入文本");
const route = useRoute()
const id = ref('')

onBeforeMount(()=>{
  id.value = <string>route.params.articleId;
})

// 1.1 引入Vditor 构造函数
import Vditor from 'vditor'
// 1.2 引入样式
import 'vditor/dist/index.css';

// 2. 获取DOM引用
const vditor = ref()

// 3. 在组件初始化时，就创建Vditor对象，并引用
onMounted(() => {
  vditor.value = new Vditor('vditor',{
    // 编辑器中默认展示的文本
    value:content.value,
    // 设置编辑器的宽高
    height: '100vh',
    width: '50vw',
    // 设置工具栏中展示的工具
    toolbar: ['emoji', 'br', 'bold', '|', 'line','quote','list','check'],
    // 编辑器失去焦点后的回调函数
    blur(value){
      // 保存文档....
      save(value)
    }
  })
})


function save(md: string) {
  content.value = md
  console.log('保存成功: '+content.value)
}

</script>

<template>
  <div id="vditor"></div>
</template>

<style scoped>


</style>