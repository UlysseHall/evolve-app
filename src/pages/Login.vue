<template>
  <div class="login">
    <h1><img class="logo" src="../assets/img/logo.svg"></h1>

    <form @submit.prevent="submitForm">
      <div>
          <label for="">IDENTIFIANT</label>
          <input type="text" placeholder="Dupont" required>
      </div>

      <div>
          <label for="">MOT DE PASSe</label>
          <input type="text" placeholder="Marc" required>
      </div>

       <input type="submit" value="Connexion">

       <a href="#" class="forget">Mot de passe oublié ?</a>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Login',

  methods: {
    submitForm() {
      this.$store.commit('changeUserAuth', true);
      this.$router.push('home');
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
