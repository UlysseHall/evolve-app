import Vue from 'vue'
import App from './App'
import router from './Router'
import store from './Store'
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
//
// UIkit.use(Icons);
// UIkit.notification('Hello world.');

// Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
