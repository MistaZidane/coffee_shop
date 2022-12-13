<script lang="ts">
import { getSiteInfo, createContacts } from "@/services/api";
import { useToast } from "vue-toastification";
interface SiteInfo {
  email: string;
  phone: string;
  location: string;
}

export default {
  setup() {
      // Get toast interface
      const toast = useToast();
      return { toast }
    },
  data() {
    return {
      siteInfo: {} as SiteInfo,
      contactFormInfo: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  components: {},
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
  methods: {
    contact() {
      createContacts(
        this.contactFormInfo.email,
        this.contactFormInfo.message,
        this.contactFormInfo.name
      )
        .then((val: any) => {
          this.toast.success("Contact sent! We will get back to you shortly")
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<template>
  <div class="main px-4 pt-5 my-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 img-section">
          <p>Contact Us</p>
          <h3>Get In Touch with us</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque sed
            recusandae eligendi, similique libero reprehenderit placeat error
            neque adipisci animi nam exercitationem nesciunt.
          </p>
          <hr />
          <div>
            <h4>Headquaters</h4>
            <p>
              <font-awesome-icon class="icons" icon="fa-solid fa-house" />
              <span> {{ siteInfo.location }}</span>
            </p>
          </div>
          <hr />
          <div>
            <h4>Phone</h4>
            <p>
              <font-awesome-icon class="icons" icon="fa-solid fa-phone" />
              <span> {{ siteInfo.phone }}</span>
            </p>
          </div>
          <hr />
          <div>
            <h4>Email</h4>
            <p>
              <font-awesome-icon class="icons" icon="fa-solid fa-envelope" />
              <a href="mailto:info@Coffreka.com"> {{ siteInfo.email }}</a>
            </p>
          </div>
        </div>
        <div class="col-md-8 form-parent pt-5 pb-5">
          <div class="contact-form-wrapper d-flex justify-content-center">
            <form class="contact-form" @submit.prevent="contact">
              <h5 class="title">Contact us</h5>
              <p class="description">
                Feel free to contact us if you need any assistance, any help or
                another question.
              </p>
              <div>
                <input
                  type="text"
                  class="form-control rounded border-white mb-3 form-input"
                  id="name"
                  placeholder="Name"
                  v-model="contactFormInfo.name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  class="form-control rounded border-white mb-3 form-input"
                  placeholder="Email"
                  required
                  v-model="contactFormInfo.email"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  class="form-control rounded border-white mb-3 form-text-area"
                  rows="5"
                  cols="30"
                  placeholder="Message"
                  v-model="contactFormInfo.message"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                class="btn btn-lg my-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-section {
  /* background: url('../assets/menu1.jpg'); */
  filter: grayscale();
}

.contact-form {
  padding: 30px 40px;
  background-color: #ffffff;
  border-radius: 12px;
  /* max-width: 400px; */
}

.contact-form textarea {
  resize: none;
}

.contact-form .form-input,
.form-text-area {
  background-color: #f0f4f5;
  height: 50px;
  padding-left: 16px;
}

.contact-form .form-text-area {
  background-color: #f0f4f5;
  height: auto;
  padding-left: 16px;
}

.contact-form .form-control::placeholder {
  color: #aeb4b9;
  font-weight: 500;
  opacity: 1;
}

.contact-form .form-control:-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.contact-form .form-control::-ms-input-placeholder {
  color: #aeb4b9;
  font-weight: 500;
}

.contact-form .title {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
}

.contact-form .description {
  color: #aeb4b9;
  font-size: 14px;
  text-align: center;
}

.contact-form .submit-button-wrapper {
  text-align: center;
}

.form-parent {
  background: url("../assets/more1.jpg");
  filter: grayscale();
  background-size: cover;
  /* background-color: black; */
}
.icons {
  font-size: 30px;
}
</style>
