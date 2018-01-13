<template>
  <div class="container">
    <h3>Create todo</h3>
    <todoForm></todoForm>
  </div>
</template>

<script>
  import todoForm from '@/components/TodoForm'
  export default {
    name: 'home',
    components: {
      todoForm
    }
  }
</script>
