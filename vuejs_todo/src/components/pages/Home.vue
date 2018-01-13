<template>
  <div class="container">
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
