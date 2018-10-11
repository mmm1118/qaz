<template>
  <div id="app">
    <Nav v-if='isShowNav' :navList='navList'/>
    <router-view/>
    <GlobalBg />
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'Vuex'
  import Nav from './components/common/Nav.vue'
  import GlobalBg from './components/common/GlobalBg.vue'
  import config from './utils/config'
  export default {
    name: 'App',
    components: {Nav,GlobalBg},
    data () {
      return {
        client:[],
        isNavFlag:false,
      }
    },
    computed: {
      ...mapGetters([
        'isShowNav'
      ]),
      navList() {
        return config.nav
      }
    },
    mounted() {
//      document.body.onmousemove = (e) => {
//        this.setNavShow()
//        this.client = [e.clientX,e.clientY]
//      }
//      document.body.onmouseout = () => {
////        this.setNavHide()
//        console.log('12')
//      }
    },
    methods: {
      ...mapActions({
        setNavShow:'CHANGENAVSHOW',
        setNavHide:'CHANGENAVHIDE',
      })
    },
    watch: {
//      client(curr,old){
//        this.isNavFlag = true
//        console.log('a')
////        if (!this.isNavFlag) return
////        setTimeout(() => {
////          this.isNavFlag = false
////        },2000)
//      },
//      isNavFlag(curr,old) {
//        if(!curr) {
//          this.setNavHide()
//        }
//      }
    }
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    -webkit-user-select: none;
  }

  i {
    font-style: normal;
    color: #FF5442;
  }
  a{
    text-decoration:none;
    color: hsl(236, 100%, 92%);
    display: inline-block;
    height: 100%;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  body {

  }

  input, select, textarea {
    font-size: 100%;
  }

  /* 去掉 table cell 的边距并让其边重合 */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* ie bug：th 不继承 text-align */
  th {
    text-align: inherit;
  }

  /* 去除默认边框 */
  fieldset, img {
    border: none;
  }

  #app {
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", "Source Han Sans SC", "Noto Sans CJK SC", "WenQuanYi Micro Hei", sans-serif;
  }
</style>
