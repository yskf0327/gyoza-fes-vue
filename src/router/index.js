import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: ()=>import('../pages/HomePage.vue'),
    name: 'Home',
  },
  {
    path: '/about',
    component: ()=>import('../pages/AboutPage.vue'),
    name: 'About',
  },
  {
    path: '/faq',
    component: ()=>import('../pages/FaqPage.vue'),
    name: 'Faq',
  },
  {
    path: '/access',
    component: ()=>import('../pages/AccessPage.vue'),
    name: 'Access',
  },
  {
    path: '/menu',
    component: ()=>import('../pages/MenuPage.vue'),
    name: 'Menu',
  },
  {
    path: '/menu-detail',
    component: ()=>import('../pages/MenuDetailPage.vue'),
    name: 'MenuDetail',
  },
  {
    path: '/contact',
    component: ()=>import('../pages/ContactPage.vue'),
    name: 'Contact',
  },
  {
    path: '/privacy',
    component: ()=>import('../pages/PrivacyPage.vue'),
    name: 'Privacy',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
