import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue -router';

createApp(App).mount('#app')

import App from './App.vue'

import homeRoute from './components/homeRoute.vue';
import aboutRoute from './components/aboutRoute.vue';
import contactRoute from './components/contactRoute.vue';


const router = createRouter({
history: createWebHistory(), // For HTML5 history mode URLs
routes: [
    { path: '/', component: homeRoute, name: 'homeRoute' },
    { path: '/aboutRoute', component: aboutRoute, name: 'aboutRoute' },
    { path: '/contactRoute', component: contactRoute, name: 'contactRoute' },
    
]
});
export default router;