<template>
    <div class="cart-container">
  <div class="cart" v-for="value in productListData">
    <div class="cart-item">
      <img :src="value.img" :alt="value.title">
      <div class="item-details">
        <span class="item-name">{{value.title}}</span>
        <span class="item-type">{{value.subtitle}}</span>
        <span class="item-price">$ {{value.price}}</span>
        <button class="cart-button">Add to Cart</button>
      </div>
  </div>
      </div>
  </div> 
</template>

<script setup>
 defineProps(['productListData'])
</script>

<style scoped>
.cart {
  width: 262px;
  height: 150%;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  margin-top: 74px;
  box-shadow: 0 6px 50px rgba(0,0,0,0.5);
<<<<<<< HEAD
  gap: 6%;
=======
  gap: 10px;

>>>>>>> 0d5cd66adf1b34433a56e7d86ba64ded398626ae
  
}
.cart-container {
     display: flex;
  align-items: center;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 37px; 
}
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
}
.cart-item img {
  width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 10px;
}
.item-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-name {
  font-weight: 600;
  font-size: 16px;
}

.item-type {
  font-weight: 400;
  font-size: 14px;
  color: gray;
}

.item-price {
  font-weight: 700;
  color: rgba(255,102,0,1);
  margin-top: 5px;
}

.cart-button {
<<<<<<< HEAD
  width: 120%;
  padding: 14px 0;
=======
  width: 70px;
  padding: 12px 0;
>>>>>>> 0d5cd66adf1b34433a56e7d86ba64ded398626ae
  background-color: rgba(255,102,0,1);
  color: white;
  font-weight: 600;
  font-size: 10px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.cart-button:hover {
  background-color: rgba(255,140,0,1);
}
</style>