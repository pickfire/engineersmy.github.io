/*
 * External dependencies
**/
import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
/*
 * Internal dependencies
**/
import App from './App'
import Router from './router/router'
import Locale from './locale/locale'
/* eslint-disable no-new */
let user = null
const bus = new Vue()
const router = Router({
  bus,
  user
})
/* Middlewares */
Vue.use(VueRouter)
FastClick.attach(document.body)

new Vue({
  router,
  // el: '#app',
  template: '<App :bus="bus" :locale="locale" :notifications="notifications" :isLoading="isLoading"/>',
  components: { App },
  beforeCreate () {
    /*
     * Initialize all the necessary variables
    **/
    this.bus = bus
    this.locale = null
    this.user = user
    this.notifications = []
    this.isLoading = false
  },
  beforeMount () {
    /*
     * Attach listeners
    **/
    this.bus.$on('router', (payload) => {
      if (payload.action === 'beforeEach') {
        this.isLoading = true
      } else if (payload.action === 'afterEach') {
        setTimeout(() => {
          this.isLoading = false
        }, 350)
      }
    })
    this.bus.$on('locale', (res) => {
      switch (res.action) {
        case 'init':
        case 'change': {
          this.locale = res.template
        }
          break
      }
    })
    this.bus.$on('notification', (payload) => {
      if (payload.action === 'show') {
        this.notifications.push({
          title: `${payload.title}-${this.notifications.length}`,
          description: `${payload.description}-${this.notifications.length}`
        })
        /*
         * Only show maximum four notifications
        **/
        if (this.notifications.length > 4) {
          this.notifications.shift()
        }
      } else {
        this.notifications.splice(payload.index, 1)
      }
    })
    Locale({ bus })
  },
  mounted () {
  },
  data () {
    return {
      bus: this.bus,
      locale: this.locale,
      notifications: this.notifications,
      isLoading: this.isLoading
    }
  }
}).$mount('#app')

// // Handle unloading the website
// window.onbeforeunload = quitSession

// function quitSession (evt) {
//   // do something
//   window.localStorage.setItem('last_logged_in', Date.now())
//   return null
// }
