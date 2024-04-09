<script setup lang="ts">
import MilkdownEditorWrapper from './MilkdownEditorWrapper.vue'

import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";
const content = ref<string>("Vue3 + Milkdown");
const route = useRoute()
const id = ref('')

onBeforeMount(()=>{
  id.value = <string>route.params.articleId;
})

</script>

<template>
  <MilkdownEditorWrapper :content="content"/>
</template>

<style scoped>


</style>