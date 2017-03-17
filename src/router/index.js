import VueRouter from 'vue-router'
/*
 * All the individual pages, arranged A-Z
**/
import PageAdmin from '../components/page/admin'
import PageContact from '../components/page/contact'
import PageHome from '../components/page/home'

/*
 * Export routes to be reused in the app-navbar, KISS
**/
export const routes = [
  // Orders are alphebetical, A-Z
  {
    name: 'index',
    path: '/',
    redirect: '/home',
    meta: {
      requiresAuth: false
    }
  },
  {
    name: 'admin',
    path: '/admin',
    component: PageAdmin,
    meta: {
      requiresAuth: false
    }
  },
  {
    name: 'contact',
    path: '/contact',
    component: PageContact
  },
  {
    name: 'home',
    path: '/home',
    component: PageHome
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
