<script lang="ts">
import Item from "@/components/Item.vue";
// import { getProducts } from "@/services/api";
import { useProductStore } from "@/stores/product";
import { computed } from "vue";

interface Product {
  info: string;
  id: string;
  imgUrl: string;
  name: string;
  price: number;
}
export default {
  components: {
    Item,
  },
  data() {
    return {
      // products: [] as Product[],
    };
  },
  beforeCreate() {
    // getProducts()
    //   .then((val: any) => {
    //     this.products = val.data.listProducts.items;
    //   })
    //   .catch((err) => {});
  },
  setup() {
    const store = useProductStore();
    store.fetchProducts();
    const products: any = computed(() => store.products);
    // const cartItems = computed(() => store.cart);
    return {
      products,
    };
  },
};
</script>
<template>
  <div class="main pt-5 pb-5">
    <div class="container">
      <div><h1 class="display-4 fw-bold intro">Our Coffee Shop</h1></div>
      <div></div>
      <div><p class="lead mb-5 mt-4">Shop our fresh roasted coffees</p></div>
      <div class="row">
        <div
          class="col-md-4 g-3"
          v-for="(item, index) in products"
          :key="index"
        >
          <Item
            :name="item.name"
            :price="item.price"
            :itemId="item.id"
            :imgUrl="item.imgUrl"
            :info="item.info"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  background: url("../assets/menu.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* background-clip: content-box; */
  height: 93vh;
  filter: grayscale(100%);
}
.intro {
  font-size: 80px;
}
.lead,
.intro {
  background-color: #a7a7a7;
  display: inline-block;
}
</style>
