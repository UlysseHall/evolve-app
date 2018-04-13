<template>
  <div class="patient">
    <h1>Patient, <br>id: {{ patient.name }}</h1>
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
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
