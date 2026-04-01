<template>
    <div class="welcome-img ">
        <div class="welcome-text-flex">
        <h1 class="welcome-h1">Welcome to</h1>
        <h1 class="welcome-h2">Quick Bite!</h1>
        <button class="welcome-button welcome-button:hover">Order Now</button>
    </div>
    </div>
</template>

<style scoped>
  .welcome-img{
    background-image:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('../assets/fast\ food\ .png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
 .welcome-h1 {
  color: white;
  font-weight: 600;
  font-size: 50px;
  margin: 0;
  line-height: 1.1; 
}
 .welcome-h2 {
  color: rgba(255, 102, 0, 1);
  font-size: 60px;
  font-weight: 900;
  margin: 5px 0 15px 0;
}
  .welcome-text-flex{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 500px;
  }
 .welcome-button {
  background-color: rgba(255, 102, 0, 1);
  padding: 12px 25px;
  font-size: 18px;
  border-radius: 20px;
  color: white;
  border: none;
  cursor: pointer;
  transition-behavior:  0.3s;
}
  .welcome-button:hover{
    background-color: rgba(255, 140, 0, 1);
  }
  @media (max-width:768px){
   .welcome-img{
    height: 45vh;
  }
  .welcome-h1{
    font-size: 35px;
    margin-bottom: 5%;
  }
  .welcome-h2{
    font-size: 35px;
    margin-bottom: 3%;
  }
  .welcome-button{
    margin-bottom: 30%;
  }


}
</style>