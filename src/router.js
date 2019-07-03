import Vue from 'vue';
import VueRouter from 'vue-router';

import Top from '@/components/Top';
import Poly from '@/components/Poly';

Vue.use(VueRouter);

var router = new VueRouter({
  mode: 'history',
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
    }
  ]
});

export default router;