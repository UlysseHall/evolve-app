<template>
  <div class="addPatient">
    <h1>Ajouter un patient</h1>

    <form @submit.prevent="formSubmit()">
      <div>
          <label for="">NOM</label>
          <input type="text" placeholder="Dupont" required>
      </div>

      <div>
          <label for="">PRENOM</label>
          <input type="text" placeholder="Marc" required>
      </div>

      <div>
          <label for="">AGE</label>
          <input type="text" placeholder="22" required>
      </div>

       <input type="submit" value="Ajouter">
  	</form>
  </div>
</template>

<script>
export default {
  name: 'AddPatient',

  props: ['id', 'session'],

  methods: {
    formSubmit() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
