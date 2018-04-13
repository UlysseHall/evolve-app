<template>
  <div class="home">
    <header>
      <div class="switch-btn">
        <div @click="toggleActive('left')" :class="{active: switchBtn === 'left'}">Suivi patients</div>
        <div @click="toggleActive('right')" :class="{active: switchBtn === 'right'}">Archive patients</div>
      </div>

    </header>
    <div class="search">
      <img src="../assets/img/search.svg">
      <input type="text" name="" class="searchPatient" placeholder="Rechercher un patient">
    </div>

    <div class="contain-peoples">
      <router-link v-for="patient in patients" :to="'/patient/'+patient.id" :key="patient.id">
        <div class="people">
          <div class="contain-img">
            <img :src="avatar(patient.avatar)">
          </div>
          <div class="description">
            <p class="name">{{ patient.name }}</p>
            <p class="seance">{{ patient.nbNextSessions }} séances</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    data() {
      return {
        switchBtn: 'left'
      }
    },

    methods: {
      toggleActive(side) {
        this.switchBtn = side
      },

      avatar(imageName) {
        return require('../assets/img/' + imageName)
      }
    },

    computed: {
      patients() {
        let patients = this.$store.state.patients;
        let result = [];

        for(let patient of patients) {
          if(this.switchBtn === 'left') {
            if(!patient.archive) {
              result.push(patient)
            }
          } else {
            if(patient.archive) {
              result.push(patient)
            }
          }
        }

        return result;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
