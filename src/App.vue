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
      this.$router.push('/login')
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
  @import 'assets/scss/font.scss';
  @import 'assets/scss/variable.scss';
  @import 'assets/scss/reset.scss';
  @import 'assets/scss/global.scss';
  @import 'assets/scss/login.scss';
  @import 'assets/scss/home.scss';
  @import 'assets/scss/profile.scss';
  @import 'assets/scss/_header_patient.scss';
  @import 'assets/scss/form.scss';
  @import 'assets/scss/addPatient.scss';
  @import 'assets/scss/patientSession.scss';
</style>

