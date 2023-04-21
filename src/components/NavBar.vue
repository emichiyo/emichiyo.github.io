<template>
    <div class="navbar">
        <div class="navbar-header-box">
            <div class="head-item">
                <h1 class="header-name">Emichiyo!</h1>
            </div>
            <div class="head-item">
                <span></span>
                Artist and Illustrator
                <br/>
                based in Omaha, Nebraska
                <br/>
                <a href="https://instagram.com/emi.chiyo_?igshid=YmMyMTA2M2Y=">@emi.chiyo_</a>
            </div>
        </div>
        <div class="navbar-tab-box">
            <div v-for="(tab, index) of tab_names" :key="index" class="tab-item">
                <router-link :to="tab.route">{{ tab.name }}</router-link>
            </div>
        </div>        
    </div>
</template>

<!-- TODO Fix routing for deployment. Non-root fails to load unless navigated from root. -->

<script lang="ts">
import "@fontsource/yomogi";
import { defineComponent } from "vue";

export default defineComponent({
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FFCAD4;

    /* padding-left: 100px;
    padding-right: 100px; */

    margin: 10;
    width: 100%;
    /* height: 10rem; */
    margin-bottom: 10px;

    box-shadow: 0.1px 0.1px 2px 0.3px black;
}

.navbar-header-box {
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.navbar-tab-box {
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.tab-item {
    margin: 1rem;
}

.head-item {
    margin: 2rem;
}

.head-info-item {
    margin: 2rem;
}
</style>