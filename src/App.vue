<script>

//Global State
import { store } from './store.js';

import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import PageMain from './components/PageMain.vue'

export default {
  data() {
    return {
      store
    }
  },
  components: {
    PageHeader,
    PageFooter,
    PageMain
  }
}

</script>

<template>
  <!-- Navbar & Jumbotron -->
  <PageHeader />
  <PageMain />
  <PageFooter />
</template>

<style lang="scss">
@use './style/global.scss';
</style>
