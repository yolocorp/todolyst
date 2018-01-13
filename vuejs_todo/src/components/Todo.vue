<template>
  <li class="collection-item dismissable">
    <div class="todo">
      <span class="task">
        <router-link :to="{ name: 'TodoDetails', params: { id: this.id }}">
          {{ task }}
        </router-link>
      </span>
      <router-link :to="{name: 'Home'}" exact v-on:click.native="deleteTodo()" class="secondary-content" id="deleteButton">
        <i class="fa fa-minus" aria-hidden="true"></i>
      </router-link>
      <router-link :to="{name: 'Home'}" exact v-on:click.native="deleteTodo()" class="secondary-content" id="updateButton">
        <i class="fa fa-pencil" aria-hidden="true"></i>
      </router-link>
    </div>
  </li>
</template>


<script>
  import axios from 'axios'

  export default {
    name: 'todo',
    props: [
      'id',
      'task',
      'status'
    ],
    data () {
      return {
        errors: []
      }
    },
    methods: {
      deleteTodo () {
        console.log('delete id ' + this.id)
        axios.delete('http://localhost:3000/todos/' + this.id, { withCredentials: true })
          .then(response => {
            console.log(response)
            this.$emit('delete-todo')
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>

<style>
  #updateButton {
    padding-right: 20px;
  }
</style>
