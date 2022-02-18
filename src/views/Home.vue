<script setup>
import { ref } from 'vue'
import api from '../api'

const articles = ref(await api.all())
</script>

<template>
  <h1>Home</h1>
  {{ articles }}
</template>

<style lang="scss"></style>
