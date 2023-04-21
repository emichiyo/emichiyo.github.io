import HelloWorld from '../pages/HelloWorld.vue';
import About from '../pages/About.vue';
import Commission from '../pages/Commission.vue';
import Contact from '../pages/Contact.vue';
import Gallery from '../pages/Gallery.vue';

import routes from '~pages';
import { createRouter, createWebHistory } from 'vue-router';


// const routes = [ 
//     {path: '/', component: HelloWorld},
//     {path: '/about', component: About},
//     {path: '/commission', component: Commission},
//     {path: '/contact', component: Contact},
//     {path: '/gallery', component: Gallery}
// ];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
