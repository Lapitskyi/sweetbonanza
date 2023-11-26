
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";


const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    children:[
      {
        path: '',
        name: 'Home',
        component: ()=>import('@/pages/Home.vue'),
      }

    ],
  },
]
const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router