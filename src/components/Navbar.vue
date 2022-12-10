<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">
        <img src="../assets/logo.svg" alt="" height="40"
      /></RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/menu" class="nav-link">Menu</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About Us</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link">Contact Us</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/products" class="nav-link">Products</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/products" class="nav-link">
              <font-awesome-icon icon="fa-solid fa-cart-shopping"
            /></RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  background-color: #eeeff1;
}
</style>
