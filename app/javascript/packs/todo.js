import Vue from 'vue/dist/vue.esm.js'
import Header from './components/header.vue'
import Vuetify from 'vuetify'
import Router from './router/router'
import store from '@/store/store'


Vue.use(Vuetify)

var app = new Vue({
  el: '#app',
  router: Router,
  components: {
    'navbar': Header
  }
});