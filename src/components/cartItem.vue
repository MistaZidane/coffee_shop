<script lang="ts">
export default {
    props:{
        name:{
            type: String,
            required: true
        },
        itemId:{
            type: String,
            required: true
        },
        info:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        }
    }
};
</script>

<template>
  <div class="cartItem row align-items-start">
    <div class="col-3 mb-2">
      <img class="w-100" src="../assets/coffee.png" alt="art image" />
    </div>
    <div class="col-5 mb-2">
      <h6 class="name">{{name}}</h6>
      <p class="pl-1 mb-0">{{info}}</p>
    </div>
    <div class="col-2">
      <p class="cartItemQuantity p-1 text-center">1</p>
    </div>
    <div class="col-2">
      <p class="cartItem1Price">${{price}}</p>
    </div>
    <hr />
  </div>
</template>

<style scoped>
.cartItem {
  --bs-gutter-x: 1.5rem;
}
.cartItemQuantity {
  /* background: #D9B692; */
  /* color: #eeeff1; */
  border-radius: 10px;
}
.name, .cartItem1Price{
    font-weight: 800;
}
</style>
