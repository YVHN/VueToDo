import { createRouter, createWebHashHistory } from 'vue-router';
// Welcome
import Welcome from '../views/Todo/pages/Welcome.vue';
// User sign in
import Login from '../views/Todo/pages/Login/Login.vue';
import SignUp from '../views/Todo/pages/SignUp.vue';
import ResetPassword from '../views/Todo/pages/ResetPassword.vue';
// ToDo
import Todo from '../views/Todo/Todo.vue';
// App
import App from '../views/Todo/pages/Application/Application.vue'
// App components
import List from '../views/Todo/pages/Application/List/List.vue';

const routes = [
  {

    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/todo',
    name: 'todo',
    component: Todo,
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
          }
        ]
      },

    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
