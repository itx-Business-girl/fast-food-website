<template>
  <div class="img-background">
    <div class="welcome-flex">
      <h1 class="h1">Our Menu Page</h1>
      <p class="p">
        Enjoy the taste of freshly made fast food crafted with quality<br />
        ingredients and rich flavors.<br />
        From juicy burgers to cheesy pizzas,<br />
        we bring you the perfect meal for every craving.
      </p>
    </div>
  </div>

  <!-- BURGER SECTION -->
  <div class="menu-section menu-section h1::after">
    <h1>Burger Deals / Packages</h1>
    <ul class="menu-list">
      <li>
        <div class="left">
          <h2>Basic Burger</h2>
          <p>Classic burger with fresh ingredients</p>
        </div>
        <span>Rs. 250</span>
      </li>

      <li>
        <div class="left">
          <h2>Zinger Burger Deal</h2>
          <p>Zinger Burger + Fries + Drink</p>
        </div>
        <span>Rs. 550</span>
      </li>

      <li>
        <div class="left">
          <h2>Double Patty Deal</h2>
          <p>Double Burger + Large Fries + Drink</p>
        </div>
        <span>Rs. 750</span>
      </li>
    </ul>
  </div>

  <!-- PIZZA -->
  <div class="menu-section menu-section h1::after">
    <h1>Pizza Deals</h1>
    <ul class="menu-list">
      <li>
        <div class="left">
          <h2>Small Pizza</h2>
          <p>6 inch pizza with cheese & toppings</p>
        </div>
        <span>Rs. 600</span>
      </li>

      <li>
        <div class="left">
          <h2>Medium Pizza Deal</h2>
          <p>Medium Pizza + Drink</p>
        </div>
        <span>Rs. 900</span>
      </li>

      <li>
        <div class="left">
          <h2>Family Deal</h2>
          <p>Large Pizza + 2 Drinks + Fries</p>
        </div>
        <span>Rs. 1500</span>
      </li>
    </ul>
  </div>

  <!-- SNACKS -->
  <div class="menu-section menu-section h1::after">
    <h1>Snacks Deals</h1>
    <ul class="menu-list">
      <li>
        <div class="left">
          <h2>Fries Pack</h2>
          <p>Crispy salted fries</p>
        </div>
        <span>Rs. 200</span>
      </li>

      <li>
        <div class="left">
          <h2>Nuggets Deal</h2>
          <p>6 Nuggets + Sauce + Drink</p>
        </div>
        <span>Rs. 400</span>
      </li>

      <li>
        <div class="left">
          <h2>Chicken Broast Deal</h2>
          <p>2 Pieces Chicken + Fries + Drink</p>
        </div>
        <span>Rs. 600</span>
      </li>
    </ul>
  </div>

  <!-- DRINKS -->
  <div class="menu-section menu-section h1::after">
    <h1>Drinks</h1>
    <ul class="menu-list">
      <li>
        <div class="left">
          <h2>Soft Drink</h2>
          <p>Pepsi / Coca Cola</p>
        </div>
        <span>Rs. 100</span>
      </li>

      <li>
        <div class="left">
          <h2>Fresh Juice</h2>
          <p>Mango / Orange</p>
        </div>
        <span>Rs. 180</span>
      </li>

      <li>
        <div class="left">
          <h2>Shake</h2>
          <p>Chocolate / Vanilla</p>
        </div>
        <span>Rs. 250</span>
      </li>
    </ul>
  </div>

  <!-- SPECIAL -->
  <div class="menu-section">
    <h1>Special Offers</h1>
    <ul class="menu-list">
      <li>
        <div class="left">
          <h2>Weekend Deal </h2>
          <p>2 Burgers + 1 Pizza + 2 Drinks</p>
        </div>
        <span>Rs. 1200</span>
      </li>
    </ul>
  </div>
</template>


<style scoped>
   * {
  margin: 0;
  padding: 0;
}
body{
    color: brown;
}

  .img-background{
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://i.pinimg.com/1200x/0b/99/18/0b9918cad06c24af7d1b2b7ee8987d84.jpg');
     background-position: center; 
     height: 80vh; 
     background-size: cover;
   background-repeat: no-repeat;
  }
  .h1{
    color: aliceblue;
    font-size: 40px;
    font-weight: 900;
  }
  .p{
    color: aliceblue;
    text-align: center;
    font-weight: 500;
    font-size:28px;
  }
  .welcome-flex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    padding-top: 18%;
  }
  .menu-section {
  padding: 30px 40px;
  max-width: 900px;
  margin: auto;
}

  .menu-section h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #5a2d0c;
  font-size: 28px;
  position: relative;
  display: inline-block;
}
.menu-section h1::after {
  content: "";
  width: 50%;
  height: 3px;
  background: #ff9800;
  position: absolute;
  left: 0;
  bottom: -5px;
}

/* LIST */
.menu-list {
  list-style: none;
  padding: 0;
}

/* ITEM */
.menu-list li {
  display: flex;
  transition: all 0.3s ease;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px dashed #ccc;
}


/* LEFT */
.left h2 {
  margin: 0;
  margin-left: 10%;
  color: #b3541e;
}

.left p {
  margin: 2px 0;
  font-size: 14px;
  color: #555;
}

/* PRICE */
.menu-list span {
  font-weight: bold;
  color: #ff9800;
  font-size: 18px;
}

/* HOVER */
.menu-list li:hover {
  padding-left: 10px;
  background: #fff3e0;
  transform: scale(1.01);
  transition: 0.3s;
}
body {
  font-family: 'Poppins', sans-serif;
}
</style>