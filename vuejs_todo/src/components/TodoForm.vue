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
    <button @click="submitForm" class="waves-effect waves-light btn">
      <template v-if="this.id !== ''">
        update
      </template>
      <template v-else>
        add
      </template>
    </button>
  </form>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'todoForm',
    data () {
      return {
        id: '',
        task: '',
        status: '',
        errors: []
      }
    },
    methods: {
      submitForm () {
        if (this.task !== '' && this.status !== '') {
          let params = ''
          if (this.id !== '') {
            params = '/' + this.id
          }
          console.log(params)
          axios.post('http://localhost:3000/todos' + params, {
            task: this.task,
            status: this.status
          }, {withCredentials: true})
            .then(response => {
              console.log(response.data)
              this.$router.back()
            })
            .catch(e => {
              this.errors.push(e)
            })
        }
      }
    },
    beforeCreate () {
      if (this.$route.params.id) {
        axios.get('http://localhost:3000/todos/' + this.$route.params.id, { withCredentials: true })
          .then(response => {
            this.id = response.data.id
            this.task = response.data.task
            this.status = response.data.status
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>

<style>
  form {
    padding: 1000px auto;
  }
</style>
