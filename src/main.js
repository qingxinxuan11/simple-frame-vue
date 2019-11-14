// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// rem自适应
import 'amfe-flexible'

// vuex
import store from './store'

// 引入vue-resource用于接口请求
import VueResource from 'vue-resource'

// filters
import '@/filters/filters'

Vue.use(VueResource)

// moment.js 以插件方式使用
Vue.use(require('vue-moment'))

Vue.prototype.$store = store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
