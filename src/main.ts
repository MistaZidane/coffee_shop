import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// aws
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCartShopping,
  faEnvelope,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping);
library.add(faHouse);
library.add(faPhone);
library.add(faEnvelope);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
