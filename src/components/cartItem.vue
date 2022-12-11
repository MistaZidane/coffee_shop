<script lang="ts">
export default{
    
}
</script>

<template>
 <div class="cartItem row align-items-start">
          <div class="col-3 mb-2">
            <img class="w-100" src="../assets/coffee.png" alt="art image">
          </div>
          <div class="col-5 mb-2">
            <h6 class="">Dark Art 1</h6>
            <p class="pl-1 mb-0">20 x 24</p>
            <p class="pl-1 mb-0">Matte Print</p>
          </div>
          <div class="col-2">
            <p class="cartItemQuantity p-1 text-center">1</p>
          </div>
          <div class="col-2">
            <p id="cartItem1Price">$66</p>
          </div>
            <hr>
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
</style>