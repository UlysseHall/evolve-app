import Vue from 'vue'
import App from './App'
import router from './Router'
import store from './Store'

// Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
