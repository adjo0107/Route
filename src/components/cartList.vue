<template>
    <div>
      <h2>Cart</h2>
      
      <ul>
        <li v-for="item in cart" :key="item.id" class="cart-item">
        
          <h3>{{ item.name }} -  </h3>
          <h4>  ₱{{ item.price }} </h4>
          
          <div class="cart-option">

            <button class="fa fa-plus" @click="increaseQuantity(item)"></button>
            <p> {{item.quantity}} </p>
            <button class="fa fa-minus" @click="decreaseQuantity(item)"></button>
          <button @click="removeFromCart(item.id)" id="removebtn">Delete</button>
          </div>
        </li> 
      <h2 class="total-price">Total: ₱{{ totalPrice.toFixed(2) }}</h2>
         
      </ul>
      
    </div>
   
  </template>
  
  <script>
  export default {
    name: 'cartList',
    props: {
      cart: {
        type: Array,
        required: true
      }
    },
    computed: {
      totalPrice() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
      }
    },
    methods: {
      removeFromCart(productId) {
        this.$emit('remove-from-cart', productId);
      },
      increaseQuantity(item) {
      item.quantity++;
      this.$emit('update-quantity', { productId: item.id, quantity: item.quantity });
      },
      decreaseQuantity(item) {
        if (item.quantity > 1) {
        item.quantity--;
        this.$emit('update-quantity', { productId: item.id, quantity: item.quantity });
      }
    }
    }
  };
  </script>
  
  <style>
  .cart-item {
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border: 1px solid black;
    margin: 10px;
   
  }
  .cart-item h4 {
    color: #FF6701;
  }
  
  
  .cart-option {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart-option button {
    margin-left: 50px;
    margin-right: 50px;
    background-color: #F3E0B5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 45px;
    height: 30px;
  }
  
  #removebtn{
  margin-left: 50px;
    margin-right: 50px;
    background-color: #F3E0B5;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    width: 60px;
    height: 30px;
  }
  #removebtn:hover{
  background-color: #FF6701;
  }
  
  .total-price {
    float: right;
    
    font-weight: bold;
    margin-right: 10px;
    padding: 10px;
    background-color: #FFC288;
  }
</style>