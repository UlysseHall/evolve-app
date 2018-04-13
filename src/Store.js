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
        next_session: '18/02/2418',
        session_today: true,
        name: 'Basser Philippine',
        confiance: '60',
        avatar: 'philippine.jpg',
        nbNextSessions: 2,
        sessionResume: '12 sur 16',
        archive: false,
        phone: '0666666666',
        email: 'julie.air@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 2,
        next_session: '18/02/2418',
        session_today: false,
        name: 'Charrier Léa',
        confiance: '12',
        avatar: 'lea.jpg',
        nbNextSessions: 4,
        sessionResume: '12 sur 16',
        archive: false,
        phone: '0677777777',
        email: 'basser.philippine@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 3,
        next_session: '18/02/2418',
        session_today: false,
        name: 'Hall Ulysse',
        confiance: '47',
        avatar: 'ulysse.jpg',
        nbNextSessions: 1,
        sessionResume: '12 sur 16',
        archive: false,
        phone: '0888888888',
        email: 'charrier.lea@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 4,
        next_session: '18/02/2418',
        session_today: false,
        name: 'Picot Clément',
        confiance: '04',
        avatar: 'clement.jpg',
        nbNextSessions: 99,
        sessionResume: '12 sur 16',
        archive: false,
        phone: '0888888888',
        email: 'charrier.lea@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 4,
        next_session: '18/02/2418',
        session_today: false,
        name: 'Aira Julie',
        confiance: '16',
        avatar: 'personne.png',
        nbNextSessions: 12,
        sessionResume: '12 sur 16',
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
