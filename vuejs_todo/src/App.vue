<template>
  <div id="app">
    <appHeader></appHeader>

    <main>
      <router-view/>
    </main>

    <appFooter></appFooter>
  </div>
</template>

<script>
  import appHeader from '@/components/AppHeader'
  import appFooter from '@/components/AppFooter'

  export default {
    name: 'app',
    components: {
      appHeader,
      appFooter
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
