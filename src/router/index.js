import Vue from 'vue'
import Router from 'vue-router'
import Checklist from '@/components/tasklist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'checklist',
      component: Checklist
    }
  ]
})
