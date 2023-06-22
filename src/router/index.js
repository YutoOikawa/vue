import UsersView from '../views/UsersView.vue';
import HomeView from '../views/HomeView.vue';
import CreateView from '../views/CreateView.vue';
import ConfirmationView from '../views/ConfirmationView.vue';
import UpdateView from '../views/UpdateView.vue';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: ConfirmationView,
      props: true
    },
    {
      path: '/update',
      name: 'update',
      component: UpdateView,
    }

  ]
})

export default router
