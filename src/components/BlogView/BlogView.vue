<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const id = ref('')

onBeforeMount(()=>{
  id.value = <string>route.params.articleId;
})



</script>

<template>
blog_view {{id}}
</template>

<style scoped>

</style>