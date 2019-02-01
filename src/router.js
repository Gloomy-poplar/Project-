import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
     {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "about" */ './views/test.vue')
    },
    {
      path: '/personallist',
      name: 'personallist',
      component: () => import(/* webpackChunkName: "about" */ './views/PersonalList.vue')
    },
    {
      path: '/personal/:id',
      name: 'personal',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ './views/Personal.vue')

    }
  ]
})
