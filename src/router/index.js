import {createRouter,createWebHistory} from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import MenuPage from '../pages/MenuPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name:'Home'
  },
  {
    path:'/menu',
    component: MenuPage,
    name:'Menu'
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router