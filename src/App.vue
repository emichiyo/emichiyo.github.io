<template>
  <div class="app">
    <NavBar/>
    <router-view
      class="current-page"
    ></router-view>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
});
</script>

<style>
.current-page {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 6rem;
  padding-right: 6rem;
}
</style>