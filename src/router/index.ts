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
