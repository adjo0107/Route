<template>
  <div id="app">

    <nav>
     <a> <router-link to="/">Login</router-link> </a>
     <a> <router-link to="/aboutRoute">Home</router-link></a> 
     
    </nav>
    
    <router-view />
  </div>
</template>

<script>
import router from './main';

export default {
  router,
  methods: {
    guard () {
      alert('yes');
    }
  }
  
};
</script>

<style>
#app {
  font-family: 'Courier New', monospace;
  text-align: center;
  background-color: #FCECDD;
  padding: 10px ;
  margin-right: 20px;
  border-radius: 40px;
}
  nav {
        display: flex;
        width: 100%;
        max-width: 1000px;
        margin: auto;
        justify-content: space-between;
        
        
      }
      nav a {
        padding: 1rem 2rem 1.15rem;
        text-transform: uppercase;
        cursor: pointer;
        color: black;
        min-width: 80px;
        margin: auto;
        text-decoration: none;
      }
      nav a:hover {
        background-image: url('https://scottyzen.sirv.com/Images/v/button.png');
        background-size: 100% 100%;
        color: #27262c;
        animation: spring 300ms ease-out;
        text-shadow: 0 -1px 0 #ef816c;
        font-weight: bold;
      }
      nav a:active {
        transform: translateY(4px);
      }
      @keyframes spring {
        15% {
          -webkit-transform-origin: center center;
          -webkit-transform: scale(1.2, 1.1);
        }
        40% {
          -webkit-transform-origin: center center;
          -webkit-transform: scale(0.95, 0.95);
        }
        75% {
          -webkit-transform-origin: center center;
          -webkit-transform: scale(1.05, 1);
        }
        100% {
          -webkit-transform-origin: center center;
          -webkit-transform: scale(1, 1);
        }
      }
    
</style>