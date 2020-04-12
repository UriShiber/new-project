import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import bulma from "bulma/css/bulma.css";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  bulma,
  render: h => h(App)
}).$mount("#app");
