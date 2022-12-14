<script lang="ts">
import Item from "@/components/Item.vue";
import Loader from "@/components/Loader.vue";
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
    Loader,
  },
  setup() {
    const store = useProductStore();
    store.fetchProducts();
    const products: any = computed(() => store.products);

    return {
      products,
    };
  },
  data() {
    return{
      isLoading: true
    }
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
        <div v-if="products.length<1" class="d-flex text-center align-items-center justify-content-center">
           <loader ></loader>
        </div>
        <template v-else>
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
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  background: url("../assets/menu.jpg");
  background-size: cover;
  background-repeat: no-repeat;
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
