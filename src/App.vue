<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <Navigation></Navigation>
        <router-view></router-view>
      </div>
    </template>
  </Suspense>
</template>

<style></style>
