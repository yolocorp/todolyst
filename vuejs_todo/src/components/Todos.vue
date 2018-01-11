<template>
  <div>
    <div v-if="todos.length > 0">
      <todo v-for="(todo, key) in todos" :task="todo.task" :status="todo.status" :key="todo.key"></todo>
    </div>
    <div v-else>
      No todo found yet !
    </div>
    <div class="row">
      <router-link :to="{ name: 'AddTodo' }" class="btn-floating btn-large waves-effect waves-light green">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import todo from '@/components/Todo'

  export default{
    name: 'todos',
    data () {
      return {
        todos: [],
        errors: []
      }
    },
    components: {
      todo
    },
    created () {
      axios.get('http://localhost:3000/todos', { withCredentials: true })
        .then(response => {
          this.todos = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
