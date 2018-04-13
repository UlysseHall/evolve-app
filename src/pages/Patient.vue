<template>
  <div class="patient">
    <header>
      <div class="info_nav">
        <div class="back"><router-link :to="'/'"><img src="../assets/img/back.svg" alt=""></router-link></div>

        <h1>{{patient.name}}</h1>

        <div class="informations"><router-link :to="'/patient/'+patient.id+'/profile'"><img src="../assets/img/info.svg" alt=""></router-link></div>
      </div>
    </header>

    <div class="next_session" v-if="!patient.session_today">
      <div>
        <h2>Prochaine séance le {{patient.next_session}} </h2>
        <p>Séance {{ patient.sessionResume }}</p>
      </div>
    </div>

    <div class="launch_robot" @click="showModal()" v-else="!patient.session_today">
      <div>
        <a>
          <img src="../assets/img/robot_head.svg" alt="">
          <span>Programmer le robot</span>
          </a>
      </div>
    </div>


    <div class="stats_glob">
      <h3>statistiques globales</h3>
      <div>
        <div>
          <img src="../assets/img/circle_80.png" alt="">
          <p>Confiance</p>
        </div>
        <div>
          <img src="../assets/img/circle_52.png" alt="">
          <p>Amicale</p>
          </div>
        <div>
          <img src="../assets/img/circle_17.png" alt="">
          <p>Confiance</p>
        </div>
        <div>
          <img src="../assets/img/circle_67.png" alt="">
          <p>Progression</p>
        </div>
        <div>
          <img src="../assets/img/circle_80.png" alt="">
          <p>Émotions</p>
        </div>
      </div>
    </div>

    <div class="suivi">
      <p class="confiance"><span>+ {{ patient.confiance }}% </span> de confiance en Ely</p>

      <div class="container-seance">
        <router-link :to="'/patient/'+patient.id+'/session/'+session.id" v-for="session in sessions" :key="session.id">
          <div class="seance">
            <p class="date">{{ session.date }}</p>
            <p class="nbrSeance">{{ session.nb }} séance</p>
          </div>
        </router-link>
      </div>
    </div>

    <modal name="launch-session" :adaptive="true" :pivotY="0.2">
      <p>Quelle forme voulez-vous que Ely doit  prendre pour cette séance ?</p>

      <img src="../assets/img/car.svg">
      <img class="img-robot" src="../assets/img/robot1.svg">

      <div class="program-robot" @click="$modal.hide('launch-session')">
        Programmer le robot
      </div>
    </modal>

  </div>
</template>

<script>
export default {
  name: 'Patient',

  props: ['id'],

  computed: {
    patient() {
      let patients = this.$store.state.patients;

      for(let patient of patients) {
        if(patient.id === parseInt(this.id)) {
          return patient;
        }
      }
    },

    sessions() {
      return this.$store.state.sessions;
    }
  },

  methods: {
    showModal() {
      this.$modal.show('launch-session');
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
