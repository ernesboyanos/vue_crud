import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import crearCrud from '../components/crear-crud.vue'
import editarCrud from '../components/editar-crud.vue'
import listarCrud from '../components/listar-crud.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'crear',
    component: crearCrud
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: editarCrud
  },
  {
    path: '/listar',
    name: 'listar',
    component: listarCrud
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
