<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import SplashScreen from "./components/SplashScreen.vue";
export default {
  components: {
    Navbar,
    SplashScreen,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
};
</script>

<template>
  <SplashScreen v-if="loading" :loading="loading" />

  <template v-else>
    <Navbar />
    
      <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
       <keep-alive> <component :is="Component"  /></keep-alive>
      </transition>
    </router-view>
    
  </template>
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
.slide-leave-to {
  opacity: 0;
  /* transform: translateX(-100px); */
  z-index: 10;
}
.slide-leave-active {
  transition: all 0.3s ease-in;
}
</style>
