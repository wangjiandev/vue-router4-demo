<script setup></script>

<template>
  <Suspense>
    <template #default>
      <div>
        <router-link :to="{ name: 'home' }">home</router-link>
        <router-link :to="{ name: 'article' }">Article</router-link>
        <hr />
        <router-view></router-view>
      </div>
    </template>
  </Suspense>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
