import Vue from 'vue'
import VueRouter from 'vue-router'
// import Mint from 'mint-ui'
import Index from './components/index'
import Register from './components/register'
import Check from './components/check'
import Disable from './components/disable'
// Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(require('vue-resource'))
var App = Vue.extend({})
var router = new VueRouter()
router.map({
  '/': {
    component: Index
  },
  '/register': {
    component: Register
  },
  '/check': {
    component: Check
  },
  '/disable': {
    component: Disable
  }
})
router.start(App, '#app')
