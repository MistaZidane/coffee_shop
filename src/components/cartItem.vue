<script lang="ts">
import { useCartStore } from "@/stores/Cart";
import { removeItem,addItem } from "@/helper/LocalstorageHelper";
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
    imgUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      itemNumber: this.$props.number,
    };
  },
  methods: {
    increament() {
      this.itemNumber++;
      addItem({
        name: this.$props.name,
        info: this.$props.info,
        id: this.$props.itemId,
        price: this.$props.price,
        imgUrl: this.$props.imgUrl,
        number:this.itemNumber
      })
        .then((val) => {
          this.store.getSavedCart();
        })
        .catch((err) => {});
    },
    decreament() {
      if (this.itemNumber == 1) {
        removeItem(this.$props.itemId)
          .then((val) => {
            this.store.getSavedCart();
          })
          .catch((err) => {});
      }
      this.itemNumber--;
    },
  },
  setup() {
    const store = useCartStore();
    return { store };
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
      <button class="cart-btn" @click="decreament">-</button>
      <input type="text" class="cart-input" v-model="itemNumber" />
      <button class="cart-btn" @click="increament">+</button>
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
.cart-input {
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
