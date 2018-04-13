import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      auth: false
    }
  },

  mutations: {
    changeUserAuth(state, auth) {
      state.user.auth = auth;
    }
  }
});
