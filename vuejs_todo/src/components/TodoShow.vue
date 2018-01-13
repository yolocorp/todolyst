<template>
  <div>
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{status}}</span>
            <p>{{task}}</p>
          </div>
        </div>
      </div>
    </div>

    <router-link :to="{name: 'Home'}">
      Back
    </router-link>
  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    name: 'todoShow',
    data () {
      return {
        id: undefined,
        task: undefined,
        status: undefined,
        errors: []
      }
    },
    created () {
      axios.get('http://localhost:3000/todos/' + this.$route.params.id, { withCredentials: true })
        .then(response => {
          console.log(response.data)
          this.id = response.data.id
          this.task = response.data.task
          this.status = response.data.status
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>
