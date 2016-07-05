import Vue from 'vue'
import VueRouter from 'vue-router'
var VueResource = require('vue-resource')
import Event from './components/event'
import Show from './components/show'
import Insert from './components/insert'
import Disabled from './components/disabled'
import Runner from './components/runner'
import Runmatch from './components/runmatch'
import Dismatch from './components/dismatch'
import Matching from './components/matching'
import Check from './components/check'
import Error from './components/error'
Vue.use(VueRouter)
Vue.use(VueResource)
var App = Vue.extend({})
var router = new VueRouter()
router.map({
  '/': {
    component: Event
  },
  '/show': {
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
  },
  '/dismatch': {
    component: Dismatch
  },
  '/runmatch': {
    component: Runmatch
  },
  '/matching': {
    component: Matching
  },
  '/check': {
    component: Check
  },
  '*': {
    component: Error
  }
})
router.start(App, '#app')
