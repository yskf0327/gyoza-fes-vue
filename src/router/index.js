import {createRouter,createWebHistory} from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import MenuPage from '../pages/MenuPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path:'/menu',
    component: MenuPage
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router