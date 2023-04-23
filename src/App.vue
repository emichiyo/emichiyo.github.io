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
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-left: 6vw;
  padding-right: 6vw;
}
</style>