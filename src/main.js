import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "@/assets/styles/index.scss";
import "bootstrap";

import Scrollspy from "vue2-scrollspy";
// use default options
Vue.use(Scrollspy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
