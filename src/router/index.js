import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: ()=>import('../pages/HomePage.vue'),
    name: 'Home',
  },
  {
    path: '/news',
    component: ()=>import('../pages/NewsPage.vue'),
    name: 'News',
  },
    {
    path: '/news/:id',
    component: ()=>import('../pages/NewsDetailPage.vue'),
    name: 'NewsDetail',
    props:true
  },
  {
    path: '/faq',
    component: ()=>import('../pages/FaqPage.vue'),
    name: 'Faq',
  },
  {
    path: '/menu',
    component: ()=>import('../pages/MenuPage.vue'),
    name: 'Menu',
  },
  {
    path: '/menu/:id',
    component: ()=>import('../pages/MenuDetailPage.vue'),
    name: 'MenuDetail',
    props:true
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
