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
  history: createWebHashHistory(), //createWebHistory()для работы с HTML5 History API
  routes,
});
