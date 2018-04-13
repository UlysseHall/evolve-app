<template>
  <div class="patient">
    <header>
      <div class="info_nav">
        <div class="back"><a href=""><img src="../assets/img/back.svg" alt=""></a></div>

        <h1>id:</h1>

        <div class="informations"><a href=""><img src="../assets/img/info.svg" alt=""></a></div>
      </div>
    </header>

    <div class="next_session">
      <h2>Prochaine séance le {{patient.next_session}} </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Patient',

  props: ['id'],

}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
