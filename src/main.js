import Vue from 'vue'
import VueRouter from 'vue-router'
var VueResource = require('vue-resource')
import Show from './components/show'
import Insert from './components/insert'
import Disabled from './components/disabled'
import Runner from './components/runner'
Vue.use(VueRouter)
Vue.use(VueResource)
var App = Vue.extend({})
var router = new VueRouter()
router.map({
  '/': {
    component: Show
  },
  '/insert': {
    component: Insert
  },
  '/disabled': {
    component: Disabled
  },
  '/runner': {
    component: Runner
  }
})
router.start(App, '#app')
