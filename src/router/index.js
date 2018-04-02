import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'
import Login from '../components/login.vue'
import Role from '../components/role/list.vue'
import User from '../components/user/list.vue'
import Department from '../components/department/list.vue'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: 'index'
  }, {
    path: '/login',
    component: Login,
    name: 'login',
  }, {
    path: '/index',
    component: Index,
    children: []
  }]
})
