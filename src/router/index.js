import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Detail from '@/views/detail/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/postDetail/:id',
      name: 'PostDetail',
      component: Detail
    }
  ]
})
