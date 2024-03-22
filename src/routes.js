import Home from './components/homeRoute.vue';
import About from './components/aboutRoute.vue';



const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/aboutRoute', component: About, name: 'about', meta: { requiresAuth: true } },
    
    ];
export default routes;