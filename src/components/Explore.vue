<script setup lang="ts"></script>

<template>
  <div class="px-4 pt-5 my-5 text-center pb-5 explore">
    <div class="container">
      <h1 class="display-4 fw-bold intro">Explore Coffreka</h1>
      <p class="lead mb-5 mt-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
        pariatur labore! Tempore ducimus ad laborum?
      </p>
      <div class="row">
        <div class="col-md-4 ">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Our Catering</h5>
              <!-- <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, molestiae. Exercitationem, rem.</h6> -->
              <p class="card-text">
                Some quick example text to build on the card title
              </p>
              <img
                src="../assets/cutlery-svgrepo-com.svg"
                alt=""
                class="img-fluid img"
              />
              <div class="btn-parent">
                <button class="btn my-btn">Order Now</button>
             </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Our Catering</h5>
              <!-- <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, molestiae. Exercitationem, rem.</h6> -->
              <p class="card-text">
                Some quick example text to build on the card title
              </p>
              <img
                src="../assets/cutlery-svgrepo-com.svg"
                alt=""
                class="img-fluid img"
              />
              <div class="btn-parent">
                <button class="btn my-btn">Order Now</button>
             </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Our Catering</h5>
              <!-- <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, molestiae. Exercitationem, rem.</h6> -->
              <p class="card-text">
                Some quick example text to build on the card title
              </p>
              <img
                src="../assets/cutlery-svgrepo-com.svg"
                alt=""
                class="img-fluid img"
              />
             <div class="btn-parent">
                <button class="btn my-btn">Order Now</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-title, .card-text {
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
.intro{
    font-size: 100px;
}
.btn-parent{
    display: flex;
    justify-content: center;
    align-items: center;
}
.card{
    border: 0px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center !important;
}
.explore{
    height: 60vh;
}
</style>
