<template>
  <div class="patientProfile">
    <header>
      <div class="info_nav">
        <div class="back"><router-link :to="'/patient/'+patient.id"><img src="../assets/img/back.svg" alt=""></router-link></div>

        <h1 class="patientProfileName">{{patient.name}}</h1>
      </div>
    </header>

    <div class="patientProfileContainer">
      <h2 class="coordonnees">COORDONNÉES</h2>
      <div class="pictos">
        <a :href="'tel:'+patient.phone"><img src="../assets/img/phone.svg"></a>
        <a :href="'mailto:'+patient.email"><img src="../assets/img/mail.svg"></a>
        <a><img src="../assets/img/map.svg"></a>
      </div>

      <h2>ANTÉCÉDENTS</h2>
      <p>{{ patient.antecedent }}</p>

      <h2>SES PEURS</h2>
      <p>{{ patient.fear }}</p>

      <button>+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientProfile',

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
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
