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
        archive: false,
        phone: '0666666666',
        email: 'julie.air@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 2,
        name: 'Basser Philippine',
        nbNextSessions: 4,
        archive: false,
        phone: '0677777777',
        email: 'basser.philippine@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 3,
        name: 'Charrier Léa',
        nbNextSessions: 2,
        archive: true,
        phone: '0888888888',
        email: 'charrier.lea@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      }
    ]
  },

  mutations: {
    changeUserAuth(state, auth) {
      state.user.auth = auth;
    }
  }
});
