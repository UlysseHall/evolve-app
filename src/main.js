import Vue from 'vue'
import App from './App'
import router from './Router'
import store from './Store'
import VModal from 'vue-js-modal'

Vue.use(VModal)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
