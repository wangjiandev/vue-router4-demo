<script setup>
import { ref } from 'vue'
import articleApi from '../../api/article'
import ListItem from '../../components/ListItem.vue'

const articles = ref(await articleApi.all())
</script>

<template>
  <ListItem v-for="article of articles" :key="article.id" :article="article" />
</template>
<style lang="scss"></style>
