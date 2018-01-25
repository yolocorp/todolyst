<template>
  <ul class="pagination">
    <li v-if="currentPage == 1" class="disabled">
      <a href="#!"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>
    </li>
    <li v-else class="waves-effect">
      <router-link :to="{ name: 'Home', params:{ page: currentPage-1} }">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </router-link>
    </li>

    <template v-for="index in numberPages">
      <li v-if="index == currentPage" class="active">
        <a href="#!">{{ index }}</a>
      </li>
      <li v-else class="waves-effect">
        <router-link :to="{ name: 'Home', params:{ page: index} }">
          {{ index }}
        </router-link>
      </li>
    </template>

    <li v-if="currentPage == numberPages" class="disabled">
      <a href="#!"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>
    </li>
    <li v-else class="waves-effect">
      <router-link :to="{ name: 'Home', params:{ page: currentPage+1} }">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'paginator',
    props: [
      'currentPage',
      'numberPages'
    ]
  }
</script>
