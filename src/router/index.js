import { createRouter, createWebHistory } from 'vue-router'

import Home from './Home.vue'
import Deals from './Deals.vue'
import Menu from './Menu.vue'
import ZingerBurger from './ZingerBurger.vue'
import Pizza from './Pizza.vue'
import Shwarma from './Shwarma.vue'
import Fries from './Fries.vue'
import Contact from './Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/deals',
    name: 'Deals',
    component: Deals
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/zinger-burger',
    name: 'ZingerBurger',
    component: ZingerBurger
  },
  {
    path: '/pizza',
    name: 'Pizza',
    component: Pizza
  },
  {
    path: '/shwarma',
    name: 'Shwarma',
    component: Shwarma
  },
  {
    path: '/fries',
    name: 'Fries',
    component: Fries
  },
   {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router