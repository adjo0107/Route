<template>
    <div>
      <h2>Products</h2>
      <ul class="product-list">
        <li v-for="product in products" :key="product.id" class="product-item">
          <div class="product-details">
          <img :src="product.image" alt="image test" class="product-image">
            <h3 class="product-name">{{ product.name }}</h3>
            <div class="product-option">
            <p class="product-price">₱ {{ product.price }}</p>
            <button @click="addToCart(product)" class="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'productsList',
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    methods: {
      addToCart(product) {
        this.$emit('add-to-cart', product);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-list {
     display: grid;
  grid-template-columns: auto auto auto;
  background-color: #FECD70;
  padding: 10px;
  margin: 30px 20px;
  }
  
  .product-item {
    width: auto;
    padding: 20px;
    margin: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    background-color: #FFC288;
  }
  
  .product-item:hover {
    transform: translateY(-5px);
  }
  
  .product-details {
    
    padding: 10px;
    text-align: center;
  }
  .product-option{
    display: flex;
    justify-content: space-between;
  }
  
  .product-name {
    margin: 0;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .product-price {
    margin: 10px 0;
    font-size: 1.1em;
    font-weight: bold;
    color: #FF6701;
  }
  
  .add-to-cart-button {
    margin-top: 10px;
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
  .product-image {
    width: 200px;
  }
  </style>
