<template>
  <div class="Nav">
    <div class='icon'></div>
    <div class='navWrpa post-title-link' v-for="(item,index) in navList">
      <router-link :to='item.router'>{{item.router}}</router-link>
    </div>
    <div class='rightWrap '>
      <div class='navWrpa login' @click='_handleLogin'>{{isLogin}}</div>
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
    computed: {
      ...mapGetters([
        'userName',
        'token'
      ]),
      isLogin (){
        return this.token ? this.userName : '登陆'
      }
    },
    methods: {
      _handleLogin() {
        this.$router.push({path: '/login'})
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
      margin: 0 30px;
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
      .login {

      }
    }
  }

  .post-title-link {
    color: #3f51b5;
    position: relative;
    display: inline-block
  }

  .post-title-link::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #3f51b5;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: .4s ease-in-out;
    transition: .4s ease-in-out
  }

  .post-title-link:hover {
    text-decoration: none
  }

  .post-title-link:hover::after, .post-title-link:active::after {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1)
  }

  .post-title-link:active {
    color:red;
  }


</style>
