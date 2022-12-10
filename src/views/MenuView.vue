<script lang="ts">
import Items from '@/components/Items.vue';
export default{
components:{
  Items
}
}
</script>
<template>
  <div class="main">
    <div class="container">

    </div>
  </div>
</template>

<style scoped>
.main{
  background: url("../assets/menu.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-clip: content-box; */
  height: 93vh;
  filter: grayscale(100%);
}
</style>
