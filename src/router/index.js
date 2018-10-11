import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import Home from '@/components/home/home'
import Music from '@/components/music/music'
import Image from '@/components/image/image'
import Login from '@/components/login_out/login_out'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
      meta:{
        //需要登陆才能访问
        requireAuth:true
      }
    },
    {
      path: '/image',
      name: 'Image',
      component: Image,
      meta:{
        //需要登陆才能访问
        requireAuth:true
      }
    }
  ]
})
