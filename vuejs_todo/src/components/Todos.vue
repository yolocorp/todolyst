<template>
  <div>
    <div v-if="todos.length > 0">
      <ul class="collection">
        <todo
          v-for="(todo, key) of todos"
          :key="todo.id"
          :task="todo.task"
          :status="todo.status"
          :id="todo.id"
          v-on:delete-todo="deleteTodo(key)">
        </todo>
      </ul>
    </div>
    <div v-else>
      Add some todo
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
    methods: {
      deleteTodo (key) {
        this.todos.splice(key, 1)
        console.log(key)
      }
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

<style>
  .btn-floating {
    margin-top: 20px;
  }
</style>
