<template>
    <div class="flex-item" :style="styleObject">
        <slot></slot>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'FlexBox',
    props: {
        order: {type: Number, required: false},
    },
    computed: {
        styleObject() {
            return {
                order: this.order,
            };
        }, 
    },
});
</script>

<style>
.flex-item {
    display: flex;
    margin: 3px;
}
</style>