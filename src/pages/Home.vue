<template>
  <div class="home">
    <header>
      <div class="switch-btn">
        <div :class="{active: isActive}" @click="toggleActive">Suivi patients</div>
        <div :class="{active: isActive}">Archive patients</div>
      </div>

    </header>
    <div class="search">
      <img src="../assets/img/search.svg">
      <input type="text" name="" placeholder="Rechercher un patient">
    </div>

    <div class="contain-peoples">
      <a href="#">
        <div class="people">
          <div class="contain-img">
            <img src="../assets/img/personne.png"> 
          </div>
          <div class="description">
            <p class="name">Air Julie</p> 
            <p class="seance">2 séances</p> 
          </div>
        </div>
      </a>

      <a href="#">
        <div class="people">
          <div class="contain-img">
            <img src="../assets/img/personne.png"> 
          </div>
          <div class="description">
            <p class="name">Air Julie</p> 
            <p class="seance">2 séances</p> 
          </div>
        </div>
      </a>

      <a href="#">
        <div class="people">
          <div class="contain-img">
            <img src="../assets/img/personne.png"> 
          </div>
          <div class="description">
            <p class="name">Air Julie</p> 
            <p class="seance">2 séances</p> 
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    data() {
      return {
        isActive: false
      }
    },

    methods: {
      toggleActive() {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
