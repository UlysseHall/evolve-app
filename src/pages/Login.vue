<template>
  <div class="login">
    <h1><img class="logo" src="../assets/img/logo.svg"></h1>

    <form action="">
      <div>
          <label for="">IDENTIFIANT</label>
          <input type="text" placeholder="Dupont">
      </div>

      <div>
          <label for="">MOT DE PASSe</label>
          <input type="text" placeholder="Marc">
      </div>

       <button>Connexion</button>

       <a href="#" class="forget">Mot de passe oublié ?</a>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
