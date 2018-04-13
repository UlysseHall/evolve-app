<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  created() {
    if(!this.user.auth) {
      this.$router.push('login')
    }
  },

  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import 'assets/scss/global.scss';
  @import 'assets/scss/variable.scss';
  @import 'assets/scss/reset.scss';
</style>

