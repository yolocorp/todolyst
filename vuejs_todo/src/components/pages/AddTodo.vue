<template>
  <div class="container">
    <h2>Add your todo</h2>
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
