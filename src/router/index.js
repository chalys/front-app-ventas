import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlantillaPagina from '../components/templates/PlantillaPagina.vue'
import PlantillaAdmin from '../components/templates/PlantillaAdmin.vue'
import Inicio from '../views/pagina/Inicio.vue'
import Productos from '../views/pagina/Productos.vue'
import Acerca from '../views/pagina/Acerca.vue'
import Login from '../views/pagina/Login.vue'

// import admin
import Categoria from '../views/admin/categoria/index.vue'
import Proveedor from '../views/admin/proveedor/Proveedor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PlantillaPagina,
    children:[
      {
        path:'/',
        name: "Inicio",
        component: Inicio
      },
      {
        path:'/productos',
        name: "Productos",
        component: Productos
      },
      {
        path:'/acerca',
        name: "Acerca",
        component: Acerca
      },
      {
        path:'/login',
        name: "Login",
        component: Login
      }

    ]
  },
  {
    path: '/admin',
    component: PlantillaAdmin,
    children:[
      {
        path: 'categoria',
        name: 'Categoria',
        component: Categoria
      },
      {
        path: 'proveedor',
        name: 'Proveedor',
        component: Proveedor
      }
    ]
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
