<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="list-item">
    <router-link :to="`/show/${article.id}`">{{ article.title }}</router-link>
  </div>
</template>

<style lang="scss" scoped>
.list-item {
  @apply bg-slate-700 text-white text-lg px-1 py-2 mb-1 hover:bg-slate-500;
}
</style>
