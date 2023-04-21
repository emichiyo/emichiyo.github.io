import "@fontsource/bellefair";
import "@fontsource/yomogi";

import './style.css'
import App from './App.vue'
// import router from './router/index';
import routes from '~pages';

import { ViteSSG } from 'vite-ssg';

export const createApp = ViteSSG(
    App,
    { routes },
);
