<template>
  <div class="">
    啊啊啊啊啊啊啊啊
    <form>
      <input type="email" name="email">
      <button type="submit"><img src="../../assets/logo.png" alt=""></button>
    </form>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'Vuex'
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    display: flex;
    width: 300px;
    background-color: #0c907d;
    align-items: flex-start;
  }
  input {
    flex-grow: 1;
    background-color: #ffb480;
    /*align-self: center;*/
    /*align-self: stretch;*/
  }
</style>
