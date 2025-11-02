import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import MenuPage from '../pages/MenuPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'Home',
  },
  {
    path: '/about',
    component: AboutPage,
    name: 'About',
  },
  {
    path: '/faq',
    component: FaqPage,
    name: 'Faq',
  },
  {
    path: '/access',
    component: AccessPage,
    name: 'Access',
  },
  {
    path: '/menu',
    component: MenuPage,
    name: 'Menu',
  },
  {
    path: '/menu-detail',
    component: MenuDetailPage,
    name: 'MenuDetail',
  },
  {
    path: '/contact',
    component: ContactPage,
    name: 'Contact',
  },
  {
    path: '/privacy',
    component: PrivacyPage,
    name: 'Privacy',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
