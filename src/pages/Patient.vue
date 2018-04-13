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
    <div @click="showModal()" v-else="!patient.session_today">
      Programmer le robot
    </div>

    <div class="launch_robot">
      <div>
        <a href="">
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
          <p>Confiance envers Ely</p>
        </div>
        <div>
          <img src="../assets/img/circle_52.png" alt="">
          <p>Amicales</p>
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
        <a href="#">
          <div class="seance">
            <p class="date">12/11/18</p>
            <p class="nbrSeance">2ème séance</p>
          </div>
        </a>
        <a href="#">
          <div class="seance">
            <p class="date">12/11/18</p>
            <p class="nbrSeance">2ème séance</p>
          </div>
        </a>
        <a href="#">
          <div class="seance">
            <p class="date">12/11/18</p>
            <p class="nbrSeance">2ème séance</p>
          </div>
        </a>
      </div>
    </div>

    <modal name="launch-session" :adaptive="true" :pivotY="0.2">
      <p>Aller débrouille toi avec ça Charrier !</p>
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
