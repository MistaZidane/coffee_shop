
<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";

</script>
<script lang="ts">
import CartItem from "../components/cartItem.vue";

export default {
  components: { CartItem },
  data() {
    return {

    };
  },
  beforeCreate() {

  },
};
</script>

<template>
  <div class="main px-4 pt-5 my-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12 info mb-5 p-3">
          <div class="row">
            <div class="col-md-5">
              <h1 class="cart-text">
                Create <br />
                an Account
              </h1>
            </div>
            <div class="col-md-3">
             
             
            </div>

            <div class="col-md-4"></div>
          </div>
        </div>
        <div class="col-12 col-sm-12 bg-free">
          <authenticator>
            <template v-slot="{ user, signOut }">
              <h1>Hello {{ user.username }}!</h1>
              <button @click="signOut">Sign Out</button>
            </template>
          </authenticator>
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
  /* background: #D9B692; */
  /* color: #eeeff1; */
  border-radius: 10px;
}
.items {
  padding-right: 30px;
}

.cart-text {
  font-size: 60px;
  font-weight: 800;
}
.cartItemQuantity {
  background-color: #1b1b1d;
  color: #eeeff1;
}
.sub,
.total {
  font-weight: 800;
}
.info {
  color: #eeeff1;
  background-color: #1b1b1d;
}
p a {
  color: #eeeff1;
}
</style>
