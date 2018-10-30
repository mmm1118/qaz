<template>
  <div class="images">
    <div class="div1"></div>
    <div class="div2"></div>
    <!--<img :src='icon' alt="">-->
    <ul>
      <li v-for='(item,index) in imgPath'> {{item}}</li>
    </ul>
    <ul>
      <li v-for='(item,index) in icon'>
        <img :src="item" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'Vuex'
  import api from '../../api/api'

  export default {
    data () {
      return {
        imgPath:[],
      }
    },
    computed: {
      icon() {
        let arr = []
        this.imgPath.map((item)=>{
          arr.push(require(`../../assets/${item}`))
        })
        return arr
      }
    },
    mounted() {
      this._renderRecommended()
    },
    methods: {
      async _renderRecommended() {
        const res = await api.recommended()

        if(res.code === 1) {
          this.imgPath = res.img
          console.log(this.imgPath)
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  .images {
    width: 300px;
    height: 300px;
    background-color: hsl(236, 100%, 92%);
    display: flex;
    flex-direction: column;
    .div1{
      flex: 1;
      background-color: purple;
    }
    .div2 {
      flex: 2;
      background-color: #fff;
    }
    img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
    }
  }
</style>
