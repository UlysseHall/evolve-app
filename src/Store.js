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
        name: 'Basser Philippine',
        avatar: 'philippine.jpg',
        nbNextSessions: 2,
        archive: false,
        phone: '0666666666',
        email: 'julie.air@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 2,
        name: 'Charrier Léa',
        avatar: 'lea.jpg',
        nbNextSessions: 4,
        archive: false,
        phone: '0677777777',
        email: 'basser.philippine@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 3,
        name: 'Hall Ulysse',
        avatar: 'ulysse.jpg',
        nbNextSessions: 1,
        archive: false,
        phone: '0888888888',
        email: 'charrier.lea@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 4,
        name: 'Picot Clément',
        avatar: 'clement.jpg',
        nbNextSessions: 99,
        archive: false,
        phone: '0888888888',
        email: 'charrier.lea@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 4,
        name: 'Aira Julie',
        avatar: 'personne.png',
        nbNextSessions: 12,
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
