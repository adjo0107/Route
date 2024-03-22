<template>
<div class="product-list">
<h1>Login</h1>
    
    <input v-model="username" type="text" placeholder="Username" > 
    <br>
    <input v-model="password" type="password" placeholder="Password">
    <br>
    <button class="add-to-cart-button" @click="toggleAuthentication">Login</button>
    </div>
</template>       

<script>
export default{
    name: 'homeRoute',
    data () {
        return {
            username: '',
            
        };
    },
    methods: {
    toggleAuthentication () {
        if (!this.username || !this.password) {
            alert('Please input fields');
            return;
        }
        let isAuthenticated = localStorage.getItem('isAuthenticated');
        isAuthenticated = isAuthenticated === 'true';
        isAuthenticated = !isAuthenticated;
       localStorage.setItem('isAuthenticated', isAuthenticated ? 'true' : 'false');
      
      if (isAuthenticated) {

        this.$router.push({ name: 'about' });

      }
    },
    toggleAuthenticationOff () {
        localStorage.setItem('isAuthenticated', 'false');
        }
    
    },
    

}



</script>

<style scope>
.add-to-cart-button {
    
    padding: 5px 10px;
    background-color: #F3E0B5;
    font-family: Courier new, monospace;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }
  .add-to-cart-button:hover {
    background-color: #FF6701;
  }
  input[type=text] {
  
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #FF6701;
  border-radius: 4px;
}
input[type=password] {
  
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #FF6701;
  border-radius: 4px;
}
.product-list {
     
  background-color: #FECD70;
  padding: 20px 0px 90px;
  margin: 30px 550px;
  border-radius: 40px;
  }
</style>