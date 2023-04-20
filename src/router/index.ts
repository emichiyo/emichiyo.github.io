import HelloWorld from '../components/HelloWorld.vue';
import About from '../components/About.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [ 
    {path: '/', component: HelloWorld},
    {path: '/about', component: About}
];

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

export default router;
