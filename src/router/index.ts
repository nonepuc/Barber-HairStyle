import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './../pages/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
