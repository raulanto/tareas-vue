<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Tareas from './components/Tareas.vue';
import Nav from './components/Nav.vue';
import Home from './components/Home.vue';
</script>

<template>

  <Nav></Nav>
  <main class="flex flex-col min-w-screen min-h-screen  bg-gray-100">
    <section class="w-full flex flex-col justify-center items-center ">
      <article class="w-fit">
        <router-view></router-view>
      </article>
    </section>
    
      
  </main>
</template>
