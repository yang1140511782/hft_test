// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入echarts
import echarts from 'echarts'
// 引入axios
import axios from 'axios'
import Utils from './lib/utils'
Vue.config.productionTip = false   
Vue.prototype.$http = axios   
Vue.prototype.$echarts = echarts
Vue.use(Utils) 
/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
