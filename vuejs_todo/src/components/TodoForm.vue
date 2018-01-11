<template>
  <form v-on:submit.prevent>
    <div class="input-field">
      <label for="task">Task</label>
      <input type="text" id="task" name="task" v-model="task"/>
    </div>
    <div class="input-field">
      <label for="status">Status</label>
      <input type="text" id="status" name="status" v-model="status"/>
    </div>
    <button @click="submitForm" class="waves-effect waves-light btn">add</button>
  </form>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'todoForm',
    data () {
      return {
        task: '',
        status: '',
        errors: []
      }
    },
    methods: {
      submitForm () {
        axios.post('http://localhost:3000/todos', {
          task: this.task,
          status: this.status
        }, { withCredentials: true })
          .then(response => {
            this.$router.push({ name: 'Home' })
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>
