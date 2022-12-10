<template>
  <div
    :class="{ loader: true, fadeout: !loading }"
    class="d-flex aligns-items-center justify-content-center align-items-center"
  >
    <img src="../assets/logo.svg" alt="" >

    <div class="waviy">
      <span style="--i:1">C</span>
      <span style="--i:2">O</span>
      <span style="--i:3">F</span>
      <span style="--i:4">F</span>
      <span style="--i:5">r</span>
      <span style="--i:6">e</span>
      <span style="--i:7">K</span>
      <span style="--i:8">A</span>
    </div>

  </div>
</template>

<script lang="ts">

export default {
  props: ["loading"],
  components:{
    
  }

};
</script>

<style>
.loader {
  text-align: center;
  color: black;
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
img {
  height: 60px;
}

.fadeout {
  transition: all 0.2s;
  animation: fadeout 0.2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.2));
  /* font-size: 100px; */
}
.waviy span {
  position: relative;
  display: inline-block;
  background-color: #eeeff1;
  text-transform: uppercase;
  animation: waviy 1s;
  animation-delay: calc(.1s * var(--i));
  
}
@keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}
</style>
