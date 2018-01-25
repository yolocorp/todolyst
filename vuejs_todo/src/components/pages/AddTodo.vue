<template>
  <div class="container">
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
