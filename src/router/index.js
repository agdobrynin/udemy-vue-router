import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'pageMain',
    component: Home
  },
  {
    path: '/about',
    name: 'pageAbout',
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '/cars',
    name: 'pageCars',
    component: () => import(/* webpackChunkName: "cars" */ '../components/Cars.vue')
  },
  {
    path: '/car/:id',
    name: 'pageCar',
    component: () => import(/* webpackChunkName: "car" */ '../components/Car'),
    children: [
      {
        name: 'pageCarDetails',
        component: () => import(/* webpackChunkName: "carDetails" */ '../components/CarDetails'),
        path: 'details',
      },
    ],
  },
  // Page not found
  {
    path: '*',
    name: 'pageNotFound',
    component: () => import(/* webpackChunkName: "pageNotFount" */ '../components/PageNotFound'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
