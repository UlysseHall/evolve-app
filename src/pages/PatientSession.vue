<template>
  <div class="patientSession">
    <h1>Patient Session</h1>
  </div>
</template>

<script>
export default {
  name: 'PatientSession',

  props: ['id', 'session-id'],

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
