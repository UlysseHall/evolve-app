<template>
  <div class="home">
    <header>
      <div class="switch-btn">
        <div :class="{active: isActive}" @click="toggleActive">Suivi patients</div>
        <div :class="{active: isActive}">Archive patients</div>
      </div>

      <div>
        
      </div>
    </header>
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
