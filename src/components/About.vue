<template>
    <div class="page-box">
        <h1>About</h1>    
        <p>Hello!</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'About'
});
</script>

<style>
.page-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>