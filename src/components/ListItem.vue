<script setup>
import { ref } from 'vue'
import articleApi from '@/api/article'
const articles = ref(await articleApi.all())
</script>

<template>
  <div class="list-item" v-for="article of articles" :key="article.id">
    <router-link :to="`/show/${article.id}`">{{ article.title }}</router-link>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  @apply bg-slate-700 text-white text-lg px-1 py-2 mb-1 hover:bg-slate-500;
}
</style>
