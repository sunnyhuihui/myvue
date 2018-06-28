// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'

Vue.use(VueRouter)
let router =  new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: IndexPage  // 这里就是利用router 匹配路由，到index的路径
      }
    ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
