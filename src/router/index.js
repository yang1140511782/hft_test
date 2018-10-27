import Vue from 'vue'
import Router from 'vue-router'
import Hft from '@/components/hft'
Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'hft',
      component: Hft
    }
  ]
})
