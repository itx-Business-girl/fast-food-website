<template>
    <header class="header">
        <h1 class="logo">Quick<strong class="logo-strong">Bite</strong></h1>
  <nav class="nav-pages nav-pages:hover">
    <router-link class="nav-pages" to="/">Home</router-link>
    <router-link class="nav-pages" to="/deals">Deals</router-link>
    <router-link class="nav-pages" to="/menu">Menu</router-link>
    <router-link class="nav-pages" to="/contact">Contact</router-link>
  </nav>
  <div class="search-box search-box search-box i">
  <input class="input-search" type="search" placeholder="Search" v-model="value" @keyup="textValueChange" >
  <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  </header>
</template>
<script setup>
 import {ref} from 'vue'
const value = ref('')
 const emit = defineEmits(['onChangeSearchBox'])
 const textValueChange= ()=>{
  emit('onChangeSearchBox', value.value)
 }
</script>

<style scoped>
* {
  margin: 0%;
  /* padding: 0%; */
}
body {
  margin: 0%;
  padding: 0%;
    box-sizing: border-box;
}
  .header{
    background-color: rgba(45, 12, 8, 1) ;
    display: flex;
    justify-content:space-between;
    align-items: center;
    /* height: 65px; */
    width: 100%;
     padding: 15px;
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
    font-size: 19px;
    color: #ccc;
    text-decoration: none;
    padding: 4px;
    /* padding-left: 13%; */
    font-weight: 600;
  }
  .nav-pages:hover{
    color: brown;
  }

   .input-search {
  width: 100%;
  height: 35px;
  padding: 5px 35px 5px 10px;
  border-radius: 15px;
  border: none;
  outline: none;
}
  
 .search-box {
  position: relative;
  width: 230px;   
}
 
  .search-box i {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: gray;
}
.for-test{
  display: flex;
}
/* .header{
  width: 145%;
}
.nav-pages{
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-right: 6%;
} */

 @media (max-width:768px){
     .header{
      flex-direction: column;
     
     }
     .nav-pages{
      flex-direction: column;
      gap: 7px;
      margin-top: 3%;
      margin-bottom: 3%;
      /* padding-right: 3%; */
     }
     /* .search-box{
      width: 70%;
      margin-left: 9%;
     }
     .logo{
      margin-left: 23%;
     } */
}
</style>