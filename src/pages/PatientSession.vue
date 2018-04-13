<template>
  <div class="patientSession">
    <header>
      <div class="info_nav">
        <div class="back"><router-link :to="'/patient/'+patient.id"><img src="../assets/img/back.svg" alt=""></router-link></div>

        <h1 class="patientProfileName">Séance du {{session.date}}</h1>
      </div>
    </header>
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
