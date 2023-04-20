<template>
  <div class="flex-box">
    <h1>Hi, Emichiyo!</h1>
    <img src="../assets/ellie.jpg" alt="The girl" width="500"/>
  </div>
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
  flex-direction: column;
}
</style>
