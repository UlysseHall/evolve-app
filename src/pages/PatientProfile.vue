<template>
  <div class="patientProfile">
    <h2 class="coordonnees">COORDONNÉES</h2>
    <div class="pictos">
	    <a href="tel:03030303"><img src="../assets/img/phone.svg"></a>
	    <a href="mailto:r@gmail.com"><img src="../assets/img/mail.svg"></a>
	    <a href=""><img src="../assets/img/map.svg"></a>
    </div>

    <h2>ANTÉCÉDENTS</h2>
    <p>Femme morte il y a 10ans , dans un accident de voiture</p>

    <h2>SES PEURS</h2>
    <p>Voitures autonomes, maisons autonomes.</p>

    <button>+</button>
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
