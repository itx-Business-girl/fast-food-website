<template>
    <header class="header">
        <h1 class="logo">Quick<strong class="logo-strong">Bite</strong></h1>
  <nav class="nav-pages nav-pages:hover">
    <router-link class="nav-pages" to="/">Home</router-link>
    <router-link class="nav-pages" to="/deals">Deals</router-link>
    <router-link class="nav-pages" to="/menu">Menu</router-link>
    <router-link class="nav-pages" to="/zingerBurger">Zinger Burgers</router-link>
    <router-link class="nav-pages" to="/pizza">Pizza</router-link>
    <router-link class="nav-pages" to="/shwarma">shwarma</router-link>
    <router-link class="nav-pages" to="/fries">Fries</router-link>
    <router-link class="nav-pages" to="/contact">Contact Us</router-link>
  </nav>
  <div class="search-box">
  <input class="input" type="search" placeholder="Search">
  <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  </header>
</template>

<style>
  .header{
    background-color: rgba(45, 12, 8, 1) ;
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 65px;
    width: 100%;
  }
  .logo{
    color: #ccc;
    font-size: 35px;
    font-weight: 600;
    padding-left: 6px;
  }
  .logo-strong{
    color: brown;
  }
  .nav-pages{
    font-size: 18px;
    color: #ccc;
    text-decoration: none;
    padding: 3px;
    margin: 5px;
    font-weight: 530px;
  }
  .nav-pages:hover{
    color: brown;
  }
  .input{
    width: 95%;
    margin-right: 2%;
    height: 30px;
    padding-right:35px ;
    flex: 1;
    font-size: 16px;
  }
  .search-box {
  position: relative;
  width: 250;
}
  .search-box i{
    position: absolute;
    /* right: 10px; */
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    font-size: 20px;
    margin-right: 3%;
  }
</style>