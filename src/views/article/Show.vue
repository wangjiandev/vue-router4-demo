<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import articleApi from '@/api/article'

const route = useRoute()
const article = ref(await articleApi.find(route.params.id))
</script>

<template>
  <div class="p-4">
    <div class="text-2xl my-4">
      {{ article.title }}
    </div>
    <div class="text-gray-800">
      {{ article.content }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
