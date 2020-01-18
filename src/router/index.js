import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cars',
    name: 'cars',
    component: () => import(/* webpackChunkName: "cars" */ '../views/Cars.vue')
  },
  {
    path: '/car/:id',
    name: 'car',
    component: () => import(/* webpackChunkName: "car" */ '../views/Car'),
    children: [
      {
        name: 'carDetails',
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
