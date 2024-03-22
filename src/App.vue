<template>
<div id="app">
<nav>
<router-link to="/">Home</router-link> |
<router-link to="/About">About</router-link> |
<router-link to="/Contact">Contact</router-link>
</nav>

</div>
</template>
<script>
import router from './router';
export default {
router,
};
</script>
<style scoped>
/* styles */
</style>