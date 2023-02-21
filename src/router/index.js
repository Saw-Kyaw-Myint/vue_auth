import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import createView from '../views/createView.vue'
import editView from '../views/editView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'register',
      component: RegisterView,
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta:{
        requireAuth:false
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component:DashboardView,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/create',
      name: 'create',
      component:createView,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component:editView,
      meta:{
        requireAuth:true
      }
    },
  
  ]
});

router.beforeEach(async (to,from) => {
if(to.meta.requireAuth && !localStorage.getItem('token')){
  return {name:'login'}
}
if(to.meta.requireAuth==false && localStorage.getItem('token')){
 return {name:'dashboard'};
}
})

export default router
