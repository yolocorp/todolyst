import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import AddTodo from '@/components/pages/AddTodo'
import TodoDetails from '@/components/pages/TodoDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:page(\\d+)*',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-todo/',
      name: 'AddTodo',
      component: AddTodo
    },
    {
      path: '/update/:id(\\d+)*',
      name: 'Update',
      component: AddTodo
    },
    {
      path: '/:id(\\d+)',
      name: 'TodoDetails',
      component: TodoDetails
    }
  ]
})
