<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
  </div>
</template>
<script>
  import AppHeader from '@/components/AppHeader';
  import autor from '@/components/autor';

  export default {
    components: {
      AppHeader,
      autor
    }
  }
</script>