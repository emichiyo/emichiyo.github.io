<template>
  <div class="app">
    <NavBar/>
    <router-view></router-view>
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