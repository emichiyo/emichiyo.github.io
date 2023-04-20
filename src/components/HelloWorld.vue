<template>
  <h1 class="flex-box">{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Hello World',
  props: {
    msg: String 
  },
});
</script>



<style scoped>
.flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
