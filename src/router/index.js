import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Zakaz from '../views/Zakaz.vue'
import Tovar from '../views/Tovar.vue'
import Client from '../views/Client.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/artikul',
    name: 'About',
    component: About
  },
  {
    path: '/zakaz',
    name: 'Zakaz',
    component: Zakaz
  },
  {
    path: '/tovar',
    name: 'Tovar',
    component: Tovar
  },
  {
    path: '/client',
    name: 'Client',
    component: Client
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
