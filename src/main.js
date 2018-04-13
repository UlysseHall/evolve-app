import Vue from 'vue'
import App from './App'
import router from './Router'
import store from './Store'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
