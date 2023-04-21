import HelloWorld from '../components/HelloWorld.vue';
import About from '../components/About.vue';
import Commission from '../components/Commission.vue';
import Contact from '../components/Contact.vue';
import Gallery from '../components/Gallery.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [ 
    {path: '/', component: HelloWorld},
    {path: '/about', component: About},
    {path: '/commission', component: Commission},
    {path: '/contact', component: Contact},
    {path: '/gallery', component: Gallery}
];

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
});

export default router;
