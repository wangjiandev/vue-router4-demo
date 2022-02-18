<script setup></script>

<template>
  <div class="navigation">
    <router-link :to="{ name: 'home' }" class="item">Home</router-link>
    <router-link :to="{ name: 'article' }" class="item">Article</router-link>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  @apply bg-gray-300 py-3 px-2;
  .item {
    @apply text-gray-700 text-xl font-bold mr-5 cursor-pointer hover:text-green-700;
    &.router-link-exact-active {
      @apply bg-green-400;
    }
  }
}
</style>
