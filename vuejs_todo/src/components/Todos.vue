<template>
  <div>
    <template v-if="todos.length > 0">
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
      <paginator :currentPage="page" :numberPages="pagesNumber"></paginator>
    </template>
    <div v-else>
      Add some todo
    </div>
    <!--Add link-->
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
  import paginator from '@/components/Paginator'

  export default{
    name: 'todos',
    data () {
      return {
        todos: [],
        errors: [],
        page: 1,
        pagesNumber: 5,
        perPage: 6
      }
    },
    components: {
      todo,
      paginator
    },
    methods: {
      deleteTodo (key) {
        this.todos.splice(key, 1)
        if (this.todos.length === 0 && this.page > 1) {
          this.page--
          this.getTodos()
        }
      },
      getTodos () {
        this.page = (this.$route.params.page) ? this.$route.params.page : 1
        let getParameters = '?page=' + this.page + '&per_page=' + this.perPage
        axios.get('http://localhost:3000/todos' + getParameters, { withCredentials: true })
          .then(response => {
            this.todos = response.data.todos
            this.pagesNumber = response.data.totalPages
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.getTodos()
    },
    updated () {
      this.getTodos()
    }
  }
</script>

<style>
  .btn-floating {
    margin-top: 20px;
  }
</style>
