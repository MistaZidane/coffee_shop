<script setup lang="ts">

</script>

<template>
    <div class="main">
         <div class="container"> 
  <div class="row  align-items-center  ">
    <div class="col-md-6 col-sm-12">
      <h1 class="intro fw-bold lh-1 mb-3" id="intro">Coffreka Delicious Coffee</h1>
      <p class="lead">We are coffee punks who don’t exaggerate about their Americanos. Time, temperature, and technique need to be on point to make the best cup of coffee, but it’s all for nothing without quality beans roasted to perfection.  </p>
      <RouterLink to="/menu" class="btn my-btn btn-lg">Shop Coffee</RouterLink>
    </div>
    <div class="col-md-6">
      <img src="../assets/header.jpg" alt="" class="img-fluid my-img header-img">
    </div>
 
  </div>
  </div>
    </div>
</template>
<style scoped>
.intro{
    font-size: 120px;
    font-weight: 800;
}
.main{
    height: 90vh;
}
.my-img{
    filter: grayscale(100%);
}

</style>
