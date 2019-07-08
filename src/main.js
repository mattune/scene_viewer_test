import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import 'formula-css/develop/formula.scss'; // 共通のリセットCSSを読み込む
import router from './router.js';
import axios from 'axios';

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
