<template>
  <div class="container">
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
