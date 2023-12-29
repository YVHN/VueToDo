import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Todo/pages/Login/Login.vue';
import SignUp from '../views/Todo/pages/SignUp.vue';
import ResetPassword from '../views/Todo/pages/ResetPassword.vue'
import Welcome from '../views/Todo/pages/Welcome.vue';
import Todo from '../views/Todo/Todo.vue';
import List from '../views/Todo/pages/List/List.vue';
import Settings from '../views/Todo/pages/Settings.vue';

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/todo/login',
    name: 'login',
    component: Login
  },
  {
    path: '/todo/sign-up',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/todo/reset-password',
    name: 'resetPassword',
    component: ResetPassword
  },
  {
    path: '/todo/:userId(\\d+)/:userName',
    name: 'todo',
    component: Todo,
    children: [
      {
        path: 'list',
        name: 'list',
        component: List
      },
      {
        path: 'settings',
        name: 'settings',
        component: Settings
      },
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
