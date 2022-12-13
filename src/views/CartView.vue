<script setup lang="ts">
import { toRefs } from "vue";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-vue";
// const { route, user, signOut } = toRefs(useAuthenticator());
const auth = useAuthenticator();
</script>
<script lang="ts">
import CartItem from "../components/cartItem.vue";
import { getSiteInfo } from "@/services/api";

interface SiteInfo {
  email: string;
  phone: string;
  location: string;
}

export default {
  components: { CartItem },
  data() {
    return {
      siteInfo: {} as SiteInfo,
    };
  },
  beforeCreate() {
    getSiteInfo()
      .then((val: any) => {
        let res = val.data.listSiteInfos.items[0];
        this.siteInfo.email = res.email;
        this.siteInfo.phone = res.phone;
        this.siteInfo.location = res.location;
      })
      .catch((err) => {
        console.log(err, "err");
      });
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
                Shopping <br />
                Cart
              </h1>
            </div>
            <div class="col-md-3">
              <h3>Need Assistance?</h3>
              <p>
                <a :href="'mailto:' + siteInfo.email">{{ siteInfo.email }}</a>
              </p>
              <p>
                <a :href="'tel:' + siteInfo.phone">{{ siteInfo.phone }}</a>
              </p>
              <p>Location: {{ siteInfo.location }}</p>
            </div>

            <div class="col-md-4"></div>
          </div>
        </div>
        <div class="col-12 col-sm-8 bg-free">
          <!--1-->
          <CartItem
            name="Freya Dark Roast"
            :price="100"
            info="Honey • Caramel • Molasses. Bold, robust, and smoky chocolate"
            item-id="1"
          />

          <CartItem
            name="Thor House Blend"
            :price="120"
            info="Raw Sugar • Chocolate Liquor • Berries.  Bold lively and bright."
            item-id="1"
          />
        </div>
        <div class="col-12 col-sm-4 p-3 proceed form bg-free">
          <div class="row m-0">
            <div class="col-sm-8 p-0">
              <h6 class="sub">Subtotal</h6>
            </div>
            <div class="col-sm-4 p-0">
              <p id="subtotal">$132.00</p>
            </div>
          </div>
          <div class="row m-0">
            <div class="col-sm-8 p-0">
              <h6>Tax</h6>
            </div>
            <div class="col-sm-4 p-0">
              <p id="tax">$6.40</p>
            </div>
          </div>
          <hr />
          <div class="row mx-0 mb-2">
            <div class="col-sm-8 p-0 d-inline">
              <h5 class="total">Total</h5>
            </div>
            <div class="col-sm-4 p-0">
              <p id="total">$138.40</p>
            </div>
          </div>

          <template v-if="auth.authStatus === 'authenticated'">
            <button class="btn btn-lg my-btn">Place Order</button>
          </template>
          <template v-else>
            <p>Please login or Create an account to place and order.</p>
            <RouterLink to="/auth" class="btn btn-lg my-btn">
              Create account
            </RouterLink>
          </template>
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
