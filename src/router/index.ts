import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import PickAttribute from '../views/PickAttribute.vue'
import GameOver from '../views/GameOver.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pick-attribute',
    name: 'Pick Attribute',
    component: PickAttribute
  },
  {
    path: '/game-over',
    name: 'Game Over',
    component: GameOver
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
