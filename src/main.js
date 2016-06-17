import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import Index from './components/index'
Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(require('vue-resource'))
var App = Vue.extend({})
var router = new VueRouter()
router.map({
  '/': {
    component: Index
  }
})

router.start(App, '#app')
