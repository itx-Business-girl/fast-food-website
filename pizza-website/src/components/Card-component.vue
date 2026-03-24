<template>
    <div class="cart-container">
  <div class="cart-card">
    <div class="cart-item">
      <img src="https://i.pinimg.com/736x/e5/df/6a/e5df6a695af69cec44d11faf4f7b7a33.jpg" alt="Zinger Burger">
      <div class="item-details">
        <span class="item-name">Cheezy Zinger</span>
        <span class="item-type">Burger</span>
        <span class="item-price">$12</span>
        <button class="cart-button">Add to Cart</button>
      </div>
      </div>
      </div>
         
      <div class="cart-card">
      <div class="cart-item">
      <img src="https://i.pinimg.com/736x/cf/63/7d/cf637da6ea699845769cc6c26ac8935b.jpg" alt="pizza">
      <div class="item-details">
        <span class="item-name">Cheezy hoted</span>
        <span class="item-type">pizza</span>
        <span class="item-price">$16</span>
        <button class="cart-button">Add to Cart</button>
      </div>
      </div>
      </div>

       <div class="cart-card">
      <div class="cart-item">
      <img src="https://i.pinimg.com/736x/72/b5/a1/72b5a16458ea71865ecc8189a3bf42eb.jpg" alt="fries">
      <div class="item-details">
        <span class="item-name">Finger fries</span>
        <span class="item-type">Crispy</span>
        <span class="item-price">$10</span>
        <button class="cart-button">Add to Cart</button>
      </div>
      </div>
      </div>

       <div class="cart-card">
      <div class="cart-item">
      <img src="https://i.pinimg.com/736x/af/35/91/af359169ba9ab8c02d6f2e8eb86e32cd.jpg" alt="chicken zinger burger">
      <div class="item-details">
        <span class="item-name">Chicken Zinger</span>
        <span class="item-type">Burger</span>
        <span class="item-price">$11</span>
        <button class="cart-button">Add to Cart</button>
      </div>
      </div>
      </div>

      <div class="cart-card">
      <div class="cart-item">
      <img src="https://i.pinimg.com/1200x/de/f4/77/def4772c25b1d237a5483d7ac4f2b6e5.jpg" alt="wings">
      <div class="item-details">
        <span class="item-name">Hot Wings </span>
        <span class="item-type">Wings</span>
        <span class="item-price">$12</span>
        <button class="cart-button">Add to Cart</button>
      </div>
      </div>
      </div>

       <div class="cart-card">
      <div class="cart-item">
      <img src="https://i.pinimg.com/736x/af/35/91/af359169ba9ab8c02d6f2e8eb86e32cd.jpg" alt="Zinger Burger">
      <div class="item-details">
        <span class="item-name">Cheezy Zinger</span>
        <span class="item-type">Burger</span>
        <span class="item-price">$12</span>
        <button class="cart-button">Add to Cart</button>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.cart-card {
  width: 262px;
  height: 150%;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  margin-top: 20px;
  box-shadow: 0 6px 50px rgba(0,0,0,0.5);
  gap: 6%;
  /* display: flex;
  align-items: center;
  justify-content: flex-start; */
  
}
.cart-container {
  display: flex;
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
  width: 110%;
  padding: 12px 0;
  background-color: rgba(255,102,0,1);
  color: white;
  font-weight: 600;
  font-size: 13px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: 0.3s;
}

.cart-button:hover {
  background-color: rgba(255,140,0,1);
}
</style>