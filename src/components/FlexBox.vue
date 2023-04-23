<template>
    <div :class="classObject" :style="styleObject">
        <slot></slot>
    </div>    
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: 'FlexBox',
    props: {
        row: {type: Boolean, required: false},
        column: {type: Boolean, required: false},
        left: {type: Boolean, required: false},
    },
    computed: {
        classObject() {
            const obj = { 'flex-box': true };
            const buffer = Object.assign(obj, this.$props);
            return buffer; 
        },
        styleObject() {
            const obj = {};

            Object.assign(obj, {
                'justify-content': (this.left) ? 'left' : 'center',
                'align-items': (this.left) ? 'left' : 'center'
            });

            return obj;
        },
    },
});
</script>

<style>
.flex-box {
    display: flex;
    /* justify using props */
    /* align-items: center; */
}

.row {
    flex-direction: row;
}

.column {
    flex-direction: column;
}
</style>