import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueCompositionApi from "@vue/composition-api";

//全局注册svg
import "./icons";
Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

//全局注册echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
