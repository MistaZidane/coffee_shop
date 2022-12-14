<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div class="cartItem row align-items-start">
    <div class="col-3 mb-2">
      <img class="w-100" src="../assets/coffee.png" alt="art image" />
    </div>
    <div class="col-5 mb-2">
      <h6 class="name">{{ name }}</h6>
      <p class="pl-1 mb-0">{{ info }}</p>
    </div>
    <div
      class="col-2 d-flex justify-content-center align-items-center text-center"
    >
      <button class="cart-btn">+</button>
      <input type="text" class="cart-input">
      <button class="cart-btn">-</button>
    </div>
    <div class="col-2">
      <p class="cartItem1Price">${{ price }}</p>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.cartItem {
  --bs-gutter-x: 1.5rem;
}
.name,
.cartItem1Price {
  font-weight: 800;
}
.cart-btn {
  border: 1px solid black;
  padding: 2px 7px;
  border-radius: 0;
}
.cart-input{
  width: 50px;
  border-radius: 0;
  border: 1px solid black;
  text-align: center;
  background-color: unset;
  height: 30px;
  border-left: none;
  border-right: none;
}
</style>
