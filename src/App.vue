<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
</script>

<template>
  <Navbar/>
  
    <Header/>
     <RouterView />
  
 
</template>
<style scoped>

</style>
