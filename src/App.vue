<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Tareas from './components/Tareas.vue';
</script>

<template>
  <main class="flex flex-grow w-screen justify-center ">
    <Tareas/>
  </main>
</template>

<style>
  html,
  body {
    height: 100%;
  }
</style>
