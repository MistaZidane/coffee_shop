<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar/>
  <router-view v-slot="{ Component, route }">
  <!-- Use any custom transition and  to `fade` -->
  <transition :name="route.meta.transitionName || 'fade'">
    <component :is="Component" />
  </transition>
</router-view>
  
 
</template>
<style scoped>

</style>
