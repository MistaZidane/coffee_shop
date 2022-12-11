<script lang="ts">
import Item from '@/components/Item.vue';
export default{
components:{
  Item
}
}
</script>
<template>
  <div class="main  pt-5  pb-5">
    <div class="container">
      <div><h1 class="display-4 fw-bold intro">Our Coffee Shop</h1></div>
      <div></div>
      <div>  <p class="lead mb-5 mt-4">
        Shop our fresh roasted coffees
      </p></div>
      <div class="row">
        <div class="col-md-4 g-3">
          <Item name="Coffee one" :price=35 itemId="1" />
        </div>
        <div class="col-md-4 g-3">
          <Item name="Coffee two" :price=45 itemId="2" />
        </div>
        <div class="col-md-4 g-3">
          <Item name="Coffee three" :price=65 itemId="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main{
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
.lead, .intro{
  background-color: #a7a7a7;
  display: inline-block;
}
</style>
