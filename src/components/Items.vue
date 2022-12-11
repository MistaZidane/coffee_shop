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
      <div class="row">
        <div class="col-md-4">
          <Item name="Coffee one" :price=35 itemId="1" />
        </div>
        <div class="col-md-4">
          <Item name="Coffee one" :price=35 itemId="2" />
        </div>
        <div class="col-md-4">
          <Item name="Coffee one" :price=35 itemId="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.img {
  height: 130px;
  width: auto;
  /* display: block; */
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
.img-fluid{
  height: 300px;
  /* width: fit-content;
  height: fit-content; */
}

</style>
