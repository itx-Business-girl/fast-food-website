import { createRouter, createWebHistory } from 'vue-router'

import Home from './Home.vue'
import Deals from './Deals.vue'
import Menu from './Menu.vue'
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