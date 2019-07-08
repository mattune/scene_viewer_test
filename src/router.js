import Vue from 'vue';
import VueRouter from 'vue-router';

import Top from '@/components/Top';
import Poly from '@/components/Poly';
import Anatome from '@/components/Anatome';

Vue.use(VueRouter);

var router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // URLパスに対応するコンポーネントを定義
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/poly',
      name: 'Poly',
      component: Poly
    },
    {
      path: '/anatome',
      name: 'Anatome',
      component: Anatome
    }
  ]
});

export default router;