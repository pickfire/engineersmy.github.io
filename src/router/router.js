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
  { name: 'index', path: '/', redirect: '/home' },
  { name: 'admin', path: '/admin', component: PageAdmin },
  { name: 'contact', path: '/contact', component: PageContact },
  { name: 'home', path: '/home', component: PageHome }
]
export default function init (options) {
  /*
   * Event aggregator bus
  **/
  const bus = options.bus
  const user = options.user

  const router = new VueRouter({
    mode: 'history',
    routes
  })
  // router.beforeRouteEnter((to, from, next) => {
  //   bus.$emit('router', {
  //     action: 'beforeRouteEnter'
  //   })
  // })
  router.beforeEach((to, from, next) => {
    bus.$emit('router', {
      action: 'beforeEach'
    })
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // This route requires auth, check if is logged in
      if (!user) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })
  // router.beforeRouteLeave((to, from, next) => {
  //   bus.$emit('router', {
  //     action: 'beforeRouteLeave'
  //   })
  // })
  router.afterEach(() => {
    bus.$emit('router', {
      action: 'afterEach'
    })
  })

  return router
}
