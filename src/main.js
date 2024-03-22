import { createApp } from 'vue'

import App from './App.vue'
import routes from './routes';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    console.log('Navigation guard triggered');
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (to.meta.requiresAuth && !isAuthenticated) {
        alert('Cannot access, Must login');
        next('/'); 
    } else {
        
        next(); // Allow navigation
    }
});

router.afterEach((to, from) => {
    console.log(`Navigated from ${from.path} to ${to.path}`);
});
export default router;

const app = createApp(App);
app.use(router); // Use the router plugin
app.mount('#app');





