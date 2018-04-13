<template>
  <div class="patient">
    <header>
      <div class="info_nav">
        <div class="back"><a href=""><img src="../assets/img/back.svg" alt=""></a></div>

        <h1>{{patient.name}}</h1>

        <div class="informations"><a href=""><img src="../assets/img/info.svg" alt=""></a></div>
      </div>
    </header>

    <div class="next_session">
      <div>
        <h2>Prochaine séance le {{patient.next_session}} </h2>
        <p>Séance 12 sur 15</p>
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
          <p>Confiance envers Ely</p>
          </div>
        <div>
          <img src="../assets/img/circle_17.png" alt="">
          <p>Confiance envers Ely</p>
        </div>
        <div>
          <img src="../assets/img/circle_67.png" alt="">
          <p>Confiance envers Ely</p>
        </div>
        <div>
          <img src="../assets/img/circle_80.png" alt="">
          <p>Confiance envers Ely</p>
        </div>
      </div>
    </div>
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
