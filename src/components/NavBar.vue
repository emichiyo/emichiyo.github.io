<template>
    <FlexBox column class="navbar">
        <FlexBox row>
            <FlexItem class="head-item">
                <h1 class="header-name">Emichiyo!</h1>
            </FlexItem> 
            <FlexItem class="head-item">
                <FlexBox column left>
                    <FlexItem>
                        Artist and Illustrator
                    </FlexItem>
                    <FlexItem>
                        based in Omaha, Nebraska
                    </FlexItem>
                    <FlexItem>
                        <a href="https://instagram.com/emi.chiyo_?igshid=YmMyMTA2M2Y=">@emi.chiyo_</a>
                    </FlexItem>
                </FlexBox>
            </FlexItem>
        </FlexBox>

        <FlexBox row>
            <div v-for="(tab, index) of tab_names" :key="index" class="tab-item">
                <router-link :to="tab.route">{{ tab.name }}</router-link>
            </div>
        </FlexBox>
    </FlexBox>
</template>

<script lang="ts">
import "@fontsource/yomogi";
import { defineComponent } from "vue";
import FlexBox from "./FlexBox.vue";
import FlexItem from "./FlexItem.vue";

export default defineComponent({
    name: 'NavBar',
    components: {
        FlexBox,
        FlexItem,
    },
    data() {
        return {
            component_width: 3000,
            // tab_names: ['Home', 'About', 'Gallery', 'Commision', 'Contact']
            tab_names: [
                { name: 'Home', route: '/'},
                { name: 'About', route: '/about'},
                { name: 'Gallery', route: '/gallery'},
                { name: 'Commission', route: '/commission'},
                { name: 'Contact', route: '/contact'}
            ] 
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
.navbar {
    position: sticky;
    position: -webkit-sticky; /* safari */
    top: -168.5px;
    bottom: 100%;
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