<template>
  <div class="container">
    <h2>Your todos</h2>
    <todos></todos>
  </div>
</template>

<script>
  import todos from '@/components/Todos'
  export default {
    name: 'home',
    components: {
      todos
    }
  }
</script>
