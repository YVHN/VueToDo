import { createRouter, createWebHashHistory } from 'vue-router';

// App
import App from '../views/Todo/pages/Application/Application.vue'
// App components
import List from '../views/Todo/pages/Application/List/List.vue';
// User sign in
import Login from '../views/Todo/pages/Login/Login.vue';
import ResetPassword from '../views/Todo/pages/ResetPassword.vue';
import SignUp from '../views/Todo/pages/SignUp.vue';
// ToDo
import Todo from '../views/Todo/Todo.vue';

const routes = [
  {
    path: '/',
    redirect: '/todo/login',
  },
  {
    path: '/todo',
    name: 'todo',
    redirect: '/todo/login',
    children: [ 
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
      {
        path: '/todo/sign-up',
        name: 'sign-up',
        component: SignUp
      },
      {
        path: '/todo/reset-password',
        name: 'reset-password',
        component: ResetPassword
      },
      {
        path: '/todo/app/:id/:user',
        name: 'app',
        component: App,
        children: [
          {
            path: 'list',
            name: 'list',
            component: List,
          },
        ]
      },
    ]
  },
  {
    path: '/:pathName(.*)',
    redirect: '/todo/login',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
