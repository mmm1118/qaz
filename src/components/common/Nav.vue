<template>
  <div class="Nav">
    <div class='icon'></div>
    <div class='navWrpa' v-for="(item,index) in navList">
      {{item.title}}
    </div>
    <div class='rightWrap '>
      <div class='navWrpa login' @click='_handleLogin'>登陆</div>
      <div class='navWrpa setting'>设置</div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'Vuex'
  export default {
    props: {
      navList: {
        type: Array,
        default()  {
          return []
        }
      }
    },
    methods: {
      _handleLogin() {
        this.$router.push({path:'/login'})
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .Nav {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 2px 5px #888888;
    position: relative;
    z-index: 1000;
    .icon {
      width: 35px;
      height: 35px;
      background: url("../../../static/icon.png") no-repeat center;
      -webkit-background-size: cover;
      background-size: cover;
      margin:0 30px;
    }
    .navWrpa {
      height: 100%;
      line-height: 50px;
      text-align: center;
      color: hsl(236, 100%, 92%);
      padding: 0 5px;
      margin-right: 35px;
    }
    .navWrpa:hover {
      border-bottom: 2px solid hsl(37, 100%, 92%);
    }
    .rightWrap {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      .login{

      }

    }
  }


</style>
