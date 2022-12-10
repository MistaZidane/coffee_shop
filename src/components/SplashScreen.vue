<template>
  <div :class="{ loader: true, fadeout: !loading }" class="d-flex aligns-items-center justify-content-center align-items-center">
  
    <!-- <img src="../assets/logo.svg" alt="" > -->
    <h1 class="splash-text">Coffreka</h1>
  </div>
</template>

<script lang="ts">
export default {
  props: ["loading"],
};

</script>

<style>
.loader {
  text-align: center;
  background-color: black;
  bottom: 0;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  top: 0;
  flex-direction: column;
  /* height: 100vh; */
}
img{
  height: 60px;
}
.splash-text{
  font-size: 100px;
  text-transform:uppercase;
  color: #eeeff1;
}
.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>