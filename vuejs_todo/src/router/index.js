import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import AddTodo from '@/components/pages/AddTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-todo',
      name: 'AddTodo',
      component: AddTodo
    }
  ]
})
