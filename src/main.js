import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
import Vue from "vue";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
