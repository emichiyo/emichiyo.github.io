<template>
    <FlexBox column left class="footer">
        <FlexItem class="head-item">
            <p>Emichiyo's Feet :3</p>
        </FlexItem> 
    </FlexBox>
</template>

<script lang="ts">
import "@fontsource/yomogi";
import { defineComponent } from "vue";
import FlexBox from "./FlexBox.vue";
import FlexItem from "./FlexItem.vue";

// work email: emichiyo18@gmail.com

/* Fix footer to bottom on pages without enough content*/

export default defineComponent({
    name: 'Footer',
    components: {
        FlexBox,
        FlexItem,
    },
    data() {
        return {
            component_width: 3000,
        };
    },
});
</script>

<style scoped>
a:visited {
    color: #000000;
}

.header-name {
    font-family: "Yomogi";
}
.footer {
    position: sticky;
    position: -webkit-sticky; /* safari */
    bottom: -100px;
    /* z-index: 100; */
    background-color: #ffe6ee;
    /* padding-left: 100px;
    padding-right: 100px; */
    /* margin: 10; */
    width: 100%;
    /* height: 10rem; */
    margin-bottom: 10px;
    box-shadow: 0.01px 0.1px 15px 0.3px rgb(202, 202, 202);
}



.tab-item {
    margin: 1rem;
}

.head-item {
    margin: 2rem;
}
</style>