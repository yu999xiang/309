import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/level',
    children:[
      {
        path: 'level',
        name: 'level',
        component: () => import(/* webpackChunkName: "about" */ '../components/level.vue')
      },
      {
        path: 'host',
        name: 'host',
        component: () => import(/* webpackChunkName: "about" */ '../components/host.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/particulars',
    name: 'Particulars',
    component: () => import(/* webpackChunkName: "about" */ '../views/Particulars.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/List.vue')
  },
  {
<<<<<<< HEAD
    path: '/operation',
    name: 'Operation',
    component: () => import(/* webpackChunkName: "about" */ '../components/operation.vue')
=======
    path: '/routine',
    name: 'routine',
    component: () => import(/* webpackChunkName: "about" */ '../views/routine.vue')
>>>>>>> 203d7a84db2f2a2e123c221b8ba132951d471bdc
  }
]

const router = new VueRouter({
  routes
})

export default router
