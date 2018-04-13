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
        name: 'Air Julie',
        nbNextSessions: 2,
        archive: false
      },
      {
        id: 2,
        name: 'Basser Philippine',
        nbNextSessions: 4,
        archive: false
      },
      {
        id: 3,
        name: 'Charrier Léa',
        nbNextSessions: 2,
        archive: true
      }
    ]
  },

  mutations: {
    changeUserAuth(state, auth) {
      state.user.auth = auth;
    }
  }
});
