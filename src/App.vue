<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar/>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  
 
</template>
<style scoped>
.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from {
  /* transform: translateX(100px); */
  z-index: 0;
  opacity: 0;
}
.slide-leave-to{
opacity: 0;
/* transform: translateX(-100px); */
z-index: 10;
} 
.slide-leave-active{
  transition: all 0.3s ease-in;
}
</style>
