<template>
    <div class="welcome-img ">
    <h1 class="heading">Exclusive Deals <strong class="strong-heading">&</strong> Combos</h1>
    <h2 class="h2">for you...</h2>
    <i><p class="p1">Enjoy our best fast food deals made just for you.<br> From juicy burgers to cheesy pizzas and crispy fries</br> — <br>grab your favorites at amazing prices.</br></p></i>
    </div>
    <div class="productCart ">
        <div class="product-flex">
          <img class="productitems" src="https://i.pinimg.com/736x/07/a1/21/07a121f2e351a30ad67a9fe85fbb9e83.jpg"></img>
          <h3>deals</h3>
          <p>for you</p>
        </div>

        <div class="product-flex">
          <img class="productitems" src="https://i.pinimg.com/736x/07/a1/21/07a121f2e351a30ad67a9fe85fbb9e83.jpg"></img>
          <h3>deals</h3>
          <p>for you</p>
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
 .productCart{
    height:auto;
    max-width: 200px;
    padding: 30px 20px;
    background-color: #e2eaeb;
    border-radius: 10px;
    /* flex-wrap: wrap; */
    /* gap: 20px; */
    margin-top: 3%;
 }
 .productitems{
    width: 100%;
    border-radius: 10px;
    padding: 1%;
 }
 .product-flex{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
 }
</style>