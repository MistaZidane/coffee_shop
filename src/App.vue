<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Explore from './components/Explore.vue'
import More from './components/More.vue'
</script>

<template>
  <Navbar/>
  
    <Header/>
    <Explore/>
    <More/>
     <RouterView />
  
 
</template>
<style scoped>

</style>
