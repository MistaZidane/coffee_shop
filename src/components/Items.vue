<script  lang="ts">
import Item from './Item.vue';
export default{
  components:{
    Item
  }
}
</script>

<template>
  <div class="px-4 pt-5 my-5 pb-5 explore">
    <div class="container">
      <h1 class="display-4 fw-bold intro">Our Coffee Shop</h1>
      <p class="lead mb-5 mt-4">
        Shop our fresh roasted coffees
      </p>
    </div>
  </div>
</template>

<style scoped>

.img {
  height: 130px;
  width: auto;
}
.intro {
  font-size: 100px;
}
.btn-parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

.explore {
  height: 60vh;
}

</style>
