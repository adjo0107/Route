<template>
  <div id="app">
    
    
    <button class="add-to-cart-button" @click="toggleAuthenticationOff">Logout</button>
    <productsList @add-to-cart="addToCart" :products="products" />
    <cartList @remove-from-cart="removeFromCart" @update-quantity="updateQuantity" :cart="cart" />
    
  </div>
</template>

<script>
import productsList from '@/components/productsList.vue';
import cartList from '@/components/cartList.vue';
import bananaImage from '@/assets/banana.jpg';
import caramelImage from '@/assets/caramel.jpg';
import puto3Image from '@/assets/puto3.jpg';
import puto4Image from '@/assets/puto4.jpg';
import puto5Image from '@/assets/puto5.jpg';
import cookiesImage from '@/assets/cookies.jpg';
import router from '@/main';

export default {
  name: 'aboutRoute',
  router,
  components: {
    productsList,
    cartList
  },
  data() {
    return {
      products: [
        { id: 1, name: '50 Piece Puto', price: 500, image: puto3Image },
        { id: 2, name: '100 Piece Puto', price: 1000, image: puto4Image },
        { id: 3, name: '50 Bilao Puto', price: 500, image: puto5Image },
        { id: 4, name: 'Cookies', price: 500, image: cookiesImage },
        { id: 5, name: 'Banana Cake', price: 300, image: bananaImage },
        { id: 6, name: '50 piece Caramel Bar', price: 500, image: caramelImage }
        
      ],
      cart: []
    };
  },
  computed: {
    total() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
  methods: {
    addToCart(product) {
      const existingItemIndex = this.cart.findIndex(item => item.id === product.id);
      if (existingItemIndex !== -1) {
        this.cart[existingItemIndex].quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    },
    toggleAuthenticationOff () {
       this.$router.push({ name: 'home' });
       localStorage.setItem('isAuthenticated', 'false');
    }
    
    
  }
};
</script>

<style>
#app {
  font-family: 'Courier New', monospace;
  text-align: center;
  background-color: #FCECDD;
  padding: 10px;
  margin: 0;
  
}
  
</style>
