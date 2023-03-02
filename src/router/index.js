import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    // component: () => import('../views/LoginMyData.vue'),
    children: [
      {
        path: 'checkout/step-1-my-data',
        name: '登入頁面',
        component: () => import('../views/LoginMyData.vue'),
      },
      {
        path: 'checkout/step-2-payment',
        name: '付款頁面',
        component: () => import('../views/PaymentView.vue'),
      },
      {
        path: 'checkout/step-3-order-confirmation',
        name: '訂單完成',
        component: () => import('../views/OrderConfirm.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
