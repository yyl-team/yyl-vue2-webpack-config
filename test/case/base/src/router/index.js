import Vue from 'vue'
import Router from 'vue-router'
// import pageIndex from '~@/page/index.vue';
const pageIndex = () => import(/* webpackChunkName: "pageIndex" */ '~@/page/index.vue')
// import pageSub from '~@/page/sub.vue';
const pageSub = () => import(/* webpackChunkName: "pageSub" */ '~@/page/sub.vue')

Vue.use(Router)

const routes = [
  {
    path: '/index',
    component: pageIndex
  },
  {
    path: '/sub',
    component: pageSub
  },
  {
    path: '*',
    redirect: '/index'
  }
]

const router = new Router({
  mode: 'hash',
  base: '/',
  routes
})
export default router
