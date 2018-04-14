import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      auth: false
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
        next_session: '23/04/2418',
        session_today: false,
        name: 'Charrier Léa',
        confiance: '12',
        avatar: 'lea.jpg',
        nbNextSessions: 4,
        sessionResume: '04 sur 16',
        archive: false,
        phone: '0677777777',
        email: 'basser.philippine@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 3,
        next_session: '10/11/2418',
        session_today: false,
        name: 'Hall Ulysse',
        confiance: '47',
        avatar: 'ulysse.jpg',
        nbNextSessions: 1,
        sessionResume: '2 sur 16',
        archive: false,
        phone: '0888888888',
        email: 'charrier.lea@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 4,
        next_session: '11/01/2418',
        session_today: false,
        name: 'Picot Clément',
        confiance: '04',
        avatar: 'clement.jpg',
        nbNextSessions: 99,
        sessionResume: '12 sur 20',
        archive: false,
        phone: '0888888888',
        email: 'charrier.lea@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      },
      {
        id: 4,
        next_session: '10/02/2418',
        session_today: false,
        name: 'Aira Julie',
        confiance: '40',
        avatar: 'personne.png',
        nbNextSessions: 12,
        sessionResume: '12 sur 40',
        archive: true,
        phone: '0888888888',
        email: 'charrier.lea@gmail.com',
        antecedent: 'Femme morte il y a 10ans , dans un accident de voiture',
        fear: 'Voitures autonomes, maisons autonomes.'
      }
    ],

    sessions: [
      {
        id: 1,
        date: '17/11/18',
        txt: 'Grande progression pendant cette séance, la patiente a confiance en Ely.',
        nb: '2ème'
      },
      {
        id: 2,
        date: '28/11/18',
        txt: 'Grande progression pendant cette séance il faut continuer.',
        nb: '3ème'
      },
      {
        id: 3,
        date: '12/12/18',
        txt: 'Grande progression pendant cette séance.',
        nb: '4ème'
      }
    ]
  },

  mutations: {
    changeUserAuth(state, auth) {
      state.user.auth = auth;
    }
  }
});
