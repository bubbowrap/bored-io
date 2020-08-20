import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import completedActivities from '../views/completedActivities.vue'
import savedActivities from '../views/savedActivities.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/completed',
    name: 'completedActivities',
    component: completedActivities
  },
  {
    path: '/saved',
    name: 'savedActivities',
    component: savedActivities
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
