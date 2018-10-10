<template>
  <div class="globalBg" :style="{backgroundImage : 'url(' + imagepath + ')', backgroundSize:'cover'}">
    <div class="maskbg" ></div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'Vuex'
  export default {
    data () {
      return {}
    },
    props: {
      imagepath: {
        type: String,
        default: '../../../static/1.png'
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .globalBg {
    position: fixed;
    z-index: -9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("../../../static/1.png") no-repeat center;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .maskbg {
    position: fixed;
    z-index: 111111111111;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
