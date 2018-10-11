<template>
  <div class='login_out'>
    <div class="login">
      <div class="login_content" v-if="!showSinginThen">
        <div class="login_select">
          <span class="s_singin" :class="{ active: status === 0 }" @click="_loginMode">登录</span>
          <span class="s_register" :class="{ active: status !== 0 }" @click="_registerMode">注册</span>
        </div>
        <div class="content_info" @keyup.enter="enterSingin">
          <div class="login_div" v-show="!status">
            <div class="block_area">
              <label for="userName">username</label>
              <input type="text" id="userName" v-model="username" placeholder="登陆用户名">
            </div>
            <div class="block_area">
              <label for="userPwd">password</label>
              <input type="password" id="userPwd" ref="usePwd" v-model="password" placeholder="登陆密码">
            </div>
            <div class='passwordselect'>
              <el-checkbox v-model="checked" >记住密码</el-checkbox>
              <div class='' @click = '_handleForgen'>忘记密码</div>
            </div>
            <input type="button" @click = '_handleLogin' value="登录" >
          </div>
          <div class="singin_div" v-show="status">
            <div class="block_area">
              <label for="suserName">username</label>
              <input type="text" id="suserName" v-model="susername" placeholder="注册用户名">
            </div>
            <div class="block_area">
              <label for="suserPwd">password</label>
              <input type="password" id="suserPwd" ref="susePwd" v-model="spassword" placeholder="注册密码">
            </div>
            <input type="button" value="注册" >
          </div>
        </div>
      </div>
      <usercompletion :username="rightSigninName" v-if="showSinginThen" @hidesingin="hideSingIn"></usercompletion>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'Vuex'
  import api from '../../api/api'
  export default {
    data () {
      return {
        // 0 是登录  1是注册
        status: 0,
        showSinginThen: false,
        username: '',
        password: '',
        susername: '',
        spassword: '',
        rightSigninName: '',
        checked: true
      }
    },

    methods: {
      _loginMode () {
        this.status = 0
      },
      _registerMode () {
        this.status = 1
      },
      _handleForgen() {

      },
      async _handleLogin () {
        if (this.username === '' || this.password === '') {
          this.$message({
            message: '请输入用户名或者密码！',
            center: true,
            type: 'error'
          });
          return false;
        }
        const params = {
          userName: this.username,
          passWord: this.password
        }
        let res = await api.login(params)
        if (res.code === 1) {
          this.$message.success(res.data);
          const user = {
            userName : this.username,
            token : res.token
          }
          this.$store.commit('SAVETOKEN',user)
          const backUrl = this.$route.query.backUrl
          if(backUrl) {
            this.$router.push(backUrl)
          }
        }else {
          this.$message.error(res.data);
        }
      },
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .login_out {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
    /*background: linear-gradient(to left bottom, hsl(22, 100%, 92%) 0%, hsl(60, 100%, 92%) 100%);*/
    .login {
      position:absolute;
      top: 50%;
      left:50%;
      width: 100%;
      border-radius: 10px;
      min-height: 300px;
      max-width: 340px;
      padding: 5px 0px;
      transform: translate3d(0,-50%,0);
      background: rgba(0,0,0,0.4);
      .login_select {
        width: 100%;
        height: 48px;
        line-height: 48px;
        font-size: 0;
        padding: 0 5px;
        box-sizing: border-box;
        span {
          display:inline-block;
          font-size: 16px;
          color: #fff;
          width: 50%;
          text-align:center;
          vertical-align:middle;
          position:relative;
          cursor: pointer;
        }
        .active::before{
          content: '';
          width: 30%;
          height: 2px;
          background: #fff;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate3d(-50%,0,0);
        }
      }
      .content_info {
        position:relative;
        box-sizing: border-box;
        padding: 20px 20px;
        .singin_div,.login_div {
          .block_area{
            margin: 10px 0 20px 0;
          }
          label,input {
            display: block;
          }
          label {
            color: #aaa;
            font-size:14px;
          }
          input[type='text'],input[type='password'],input[type='email'] {
            background: transparent;
            outline:none;
            height: 36px;
            width: 100%;
            color: #fff;
            text-indent: 4px;
            font-size:14px;
            border: none;
            border-bottom: 1px solid #aaa;
            box-sizing: border-box;
          }
          &:focus{
            border-bottom: 1px solid #fff;
          }
          .passwordselect {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
          }
        }
        input[type='button'] {
          background: transparent;
          border: 1px solid #aaa;
          height: 32px;
          width: 100%;
          border-radius: 5px;
          color: #fff;
          height: 36px;
          line-height: 36px;
          margin-top: 30px;
          margin-bottom: 10px;
          outline:none;
          cursor: pointer;
          -webkit-appearance:none;
          &:hover {
            background: rgba(0,0,0,0.6);
          }
        }
      }
    }

  }


</style>
