<template>
  <div class="patientSession">
    <header>
      <div class="info_nav">
        <div class="back"><router-link :to="'/patient/'+patient.id"><img src="../assets/img/back.svg" alt=""></router-link></div>

        <h1 class="patientProfileName">Séance du {{session.date}}</h1>
      </div>
    </header>

      <div class="stats_glob">
        <h2>Ressenti du  patient</h2>
        <div>
          <div>
            <img src="../assets/img/circle_80.png" alt="">
            <p>Amicale</p>
          </div>
          <div>
            <img src="../assets/img/circle_52.png" alt="">
            <p>Peur</p>
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

      <div class="rendu">
        <h2>compte rendu textuel</h2>
        <p>Grande progression pendant cette séance, la patiente a confiance en Ely.</p>
      </div>

      <div class="stats_glob">
        <h2>Ressenti du robot envers le patient</h2>
        <div>
          <div>
            <img src="../assets/img/circle_80.png" alt="">
            <p>Amicale</p>
          </div>
          <div>
            <img src="../assets/img/circle_52.png" alt="">
            <p>Animosité</p>
            </div>
          <div>
            <img src="../assets/img/circle_17.png" alt="">
            <p>Peur</p>
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
  </div>
</template>

<script>
export default {
  name: 'PatientSession',

  props: ['id', 'id2'],

  computed: {
    patient() {
      let patients = this.$store.state.patients;

      for(let patient of patients) {
        if(patient.id === parseInt(this.id)) {
          return patient;
        }
      }
    },

    session() {
      let sessions = this.$store.state.sessions;

      for(let session of sessions) {
        if(session.id === parseInt(this.id2)) {
          return session;
        }
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
