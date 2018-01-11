<template>
  <div class="col s6 m3" :id="key">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">{{ task }}</span>
        <p>
          {{ status }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todo',
    props: [
      'id',
      'task',
      'status'
    ]
  }
</script>
