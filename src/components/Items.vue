<script setup lang="ts"></script>

<template>
  <div class="px-4 pt-5 my-5 text-center pb-5 explore">
    <div class="container">
      <h1 class="display-4 fw-bold intro">Our Shop</h1>
      <p class="lead mb-5 mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
        pariatur labore! Tempore ducimus ad laborum?
      </p>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="../assets/more1.jpg" class="img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn my-btn">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="../assets/more1.jpg" class="img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn my-btn">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="../assets/more1.jpg" class="img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn my-btn">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title,
.card-text {
  text-align: left !important;
}
.card-title {
  font-weight: 800;
}
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
.card {
  border: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center !important;
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
