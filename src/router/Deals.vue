<template>
    <div class="welcome-img ">
    <h1 class="heading">Exclusive Deals <strong class="strong-heading">&</strong> Combos</h1>
    <h2 class="h2">for you...</h2>
    <i><p class="p1">Enjoy our best fast food deals made just for you.<br> From juicy burgers to cheesy pizzas and crispy fries</br> — <br>grab your favorites at amazing prices.</br></p></i>
    </div>
    <i><h1 class="heading-speacial">Speacial deals!</h1></i>
    <div class="productCart ">
        <div class="product-flex">
          <img class="productitems" src="https://i.pinimg.com/736x/07/a1/21/07a121f2e351a30ad67a9fe85fbb9e83.jpg"></img>
          <h3>deal 1</h3>
          <p>$23</p>
          <button class="button">Add to cart</button>
        </div>

        <div class="product-flex">
          <img class="productitems" src="https://i.pinimg.com/736x/07/a1/21/07a121f2e351a30ad67a9fe85fbb9e83.jpg"></img>
          <h3>deals</h3>
          <p>for you</p>
          <button class="button">Add to cart</button>
        </div>

         <div class="product-flex">
          <img class="productitems" src="https://i.pinimg.com/736x/07/a1/21/07a121f2e351a30ad67a9fe85fbb9e83.jpg"></img>
          <h3>deals</h3>
          <p>for you</p>
          <button class="button">Add to cart</button>
        </div>

         <div class="product-flex padding-5">
          <img class="productitems" src="https://i.pinimg.com/736x/07/a1/21/07a121f2e351a30ad67a9fe85fbb9e83.jpg"></img>
          
            <h3>deals</h3>
          <p>for you</p>
          <button class="button">Add to cart</button>
         
        
        </div>
    
         <div class="product-flex">
          <img class="productitems" src="https://i.pinimg.com/736x/07/a1/21/07a121f2e351a30ad67a9fe85fbb9e83.jpg"></img>
          <h3>deals</h3>
          <p>for you</p>
          <button class="button">Add to cart</button>
        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0%;
    padding: 0%;
}
 .welcome-img{
    background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://i.pinimg.com/1200x/a6/de/30/a6de3029f0e31d3647ef79af37e36a06.jpg');
    background-size: cover;
    background-position: center;
    height: 60vh;
 }
 .heading{
    color:#ccc;
    font-size: 34px;
    font-weight: 700;
    padding-top: 7%;
    padding-left: 4%;
 }
 .h2{
    color: rgb(199, 190, 189);
    font-size:33px;
    margin-top: 1%;
    margin-left:20%;
    font-weight: 600;
 }
 .p1{
    margin-top: 2%;
    padding-left: 4%;
    color: rgb(175, 70, 38);
    font-size: 22px;
    font-weight: 600;
 }
 .strong-heading{
    color:rgb(167, 51, 15);
 }
.productCart {
    display:flex;  
    justify-content: center;
    align-items: center;
    gap: 20px;       
    padding: 10px;
    margin-top: 3%;
}
 .productitems{
    width: 90%;
    border-radius: 20px;
    padding: 5% ;
 }
 .product-flex{
     display:flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    gap: 30px;
     background-color: #854731;
    width: 150px;
    padding: 1%;
    border-radius: 10px;
 }
 .button{
   color: white;
   background-color: brown;
   padding: 15px 15px;
   border-radius: 8px;
   border: none;
   width: 100%;
   margin-bottom: 10%;

 }
 .padding-5{
   padding-left: 5px;
   padding-right: 5px;
 }
 .heading-speacial{
   color: brown;
   text-align: center;
   font-size: 50px;
   font-weight: 900;
   margin-top: 2%;
 }
</style>