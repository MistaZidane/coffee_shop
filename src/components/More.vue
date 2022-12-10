<script setup lang="ts"></script>

<template>
  <div class="main">
    <div class="container">
      <div class="row flex-lg-row-reverse align-items-center">
        <div class="col-md-6">
          <h1 class="intro fw-bold lh-1 mb-3">Order Your Favorite Coffee</h1>
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
            ullam? Dolores nam deleniti aliquid numquam molestiae dolore
            corrupti dolorum at, cum, ipsa magni!
          </p>
          <button class="btn my-btn btn-lg">Shop Coffee</button>
        </div>
        <div class="col-md-6">
          <img src="../assets/more.png" alt="" class="img-fluid my-img" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.intro {
  font-size: 60px;
  font-weight: 800;
}
.my-img {
  filter: grayscale(100%);
  /* height: 50vh; */
}
</style>
