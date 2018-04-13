import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      auth: true
    },
    patients: [
      {
        id: 1,
        name: 'clement',
      }
    ]
    },

  mutations: {
    changeUserAuth(state, auth) {
      state.user.auth = auth;
    }
  }
});
