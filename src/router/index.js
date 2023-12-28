import { createRouter, createWebHashHistory } from 'vue-router'
import LoginUser from '../views/LoginUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginUser
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
