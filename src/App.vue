<template>
  <div class="app">
    <NavBar/>
    <router-view
      class="current-page"
    ></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
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