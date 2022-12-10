<script setup lang="ts">

</script>

<template>
  <div class="card" >
    <div class="container mt-3">
      <img src="../assets/coffee.png" class="card-img-top" alt="..." />
    </div>
    <div class="card-body">
      <h5 class="card-title">Coffee Name</h5>
      <p class="card-text">$700</p>
      <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->
     
      <a href="#" target="_blank" class="btn my-btn btn-lg">Add to Cart <font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
    </div>
  </div>
</template>

<style scoped>
.container:hover > img {
  transform: scale(1.2);
}

.container img {
  transition: 0.4s ease;
  cursor: pointer;
}
</style>
