<script lang="ts">
export default {
  components: {},
};
</script>

<template>
  <div class="main px-4 pt-5 my-5 pb-5">
    <div class="container">
      <h2>Shopping Cart</h2>
      <div class="row">
        <div class="col-12 col-sm-8 items">
        <!--1-->
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
        </div>
        <hr>
        <!--2-->
        <div class="cartItem row align-items-start">
          <div class="col-3 mb-2">
            <img class="w-100" src="../assets/coffee.png" alt="art image">
          </div>
          <div class="col-5 mb-2">
            <h6 class="">Dark Art 2</h6>
            <p class="pl-1 mb-0">20 x 24</p>
            <p class="pl-1 mb-0">Matte Print</p>
          </div>
          <div class="col-2">
            <p class="cartItemQuantity p-1 text-center">1</p>
          </div>
          <div class="col-2">
            <p id="cartItem1Price">$66</p>
          </div>
        </div>
        <hr>
      </div>
      <div class="col-12 col-sm-4 p-3 proceed form">
        <div class="row m-0">
          <div class="col-sm-8 p-0">
            <h6 class="sub">Subtotal</h6>
          </div>
          <div class="col-sm-4 p-0">
            <p id="subtotal">$132.00</p>
          </div>
        </div>
        <div class="row m-0">
          <div class="col-sm-8 p-0 ">
            <h6>Tax</h6>
          </div>
          <div class="col-sm-4 p-0">
            <p id="tax">$6.40</p>
          </div>
        </div>
        <hr>
        <div class="row mx-0 mb-2">
          <div class="col-sm-8 p-0 d-inline">
            <h5 class="total">Total</h5>
          </div>
          <div class="col-sm-4 p-0">
            <p id="total">$138.40</p>
          </div>
        </div>
       <button class="btn btn-lg my-btn">Place Order</button>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 93vh;
}
.form div {
  margin-bottom: 0.4em;
}
.cartItem {
  --bs-gutter-x: 1.5rem;
}
.cartItemQuantity,
.proceed {
  background: #D9B692;
  /* color: #eeeff1; */
  border-radius: 10px;
}
.items {
  padding-right: 30px;
}
.my-btn{
  /* background-color: #eeeff1;
  color: #1b1b1d; */
}
.cartItemQuantity{
  background-color: #1b1b1d;
  color: #eeeff1;
}
.sub, .total{
  font-weight: 800;
}

</style>
