<script lang="ts">
import Items from '@/components/Items.vue';
export default{
components:{
  Items
}
}
</script>
<template>
  
    <Items/>

</template>

<style scoped>
.card-title,
.card-text {
  text-align: left !important;
}
.card-title {
  font-weight: 800;
}
.img {
  height: 130px;
  width: auto;
  /* display: block; */
}
.intro {
  font-size: 100px;
}
.btn-parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  border: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center !important;
}
.explore {
  height: 60vh;
}
.img-fluid{
  height: 300px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
