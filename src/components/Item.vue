<script lang="ts">
import { useCartStore } from "@/stores/Cart";
import { addItem } from "@/helper/LocalstorageHelper";
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    itemId: {
      type: String,
      required: true,
    },
    imgUrl: {
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
  mounted() {},
  methods: {
    addToCart() {
      addItem({
        name: this.$props.name,
        info: this.$props.info,
        id: this.$props.itemId,
        price: this.$props.price,
        imgUrl: this.$props.imgUrl,
        number:1
      })
        .then((val) => {
          this.store.getSavedCart();
        })
        .catch((err) => {});
      let addToCartBtn: any = this.$refs.addToCartBtn;
      let cart = document.querySelector("#cart");
      addToCartBtn?.classList.add("sendtocart");
      setTimeout(() => {
        addToCartBtn?.classList.remove("sendtocart");
        cart?.classList.add("shake");
        setTimeout(() => {
          cart?.classList.remove("shake");
        }, 500);
      }, 1000);
    },
  },
  setup() {
    const store = useCartStore();
    return { store };
  },
};
</script>

<template>
  <div class="card">
    <div class="container mt-3">
      <img :src="imgUrl" class="card-img-top" alt="..." />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        ${{ price }}: <span>{{ info }}</span>
      </p>
      <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping" /> -->

      <button @click="addToCart" class="btn my-btn btn-lg" ref="addToCartBtn">
        Add to Cart <span class="cart-item"></span>
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </button>
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
.cart-item {
  position: absolute;
  height: 24px;
  width: 24px;
  top: -10px;
  right: -10px;
}
.cart-item:before {
  content: "1";
  display: block;
  line-height: 24px;
  height: 24px;
  width: 24px;
  font-size: 12px;
  font-weight: 600;
  background: #a2a2a2;
  color: white;
  border-radius: 20px;
  text-align: center;
}

.sendtocart .cart-item {
  display: block;
  animation: xAxis 1s forwards cubic-bezier(1, 0.44, 0.84, 0.165);
}
.sendtocart .cart-item:before {
  animation: yAxis 1s alternate forwards cubic-bezier(0.165, 0.84, 0.44, 1);
}

.shake {
  animation: shakeCart 0.4s ease-in-out forwards;
}
</style>
