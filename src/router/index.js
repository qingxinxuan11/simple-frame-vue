import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// import Home from '@/pages/home/home'

import homeRouter from './pages'

let routerArr = [...homeRouter]

Vue.use(Router)

export default new Router({
  linkActiveClass: 'on',
  mode: 'history',
  routes: routerArr
})
