<template>
  <div class="container">
    <h3>Todo details</h3>
    <todoShow></todoShow>
  </div>
</template>

<script>
  import todoShow from '@/components/TodoShow'

  export default {
    name: 'todoDetails',
    components: {
      todoShow
    }
  }
</script>
