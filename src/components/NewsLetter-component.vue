<template>
    <div class="Newsletter">
        <h1 class="Newsletter-heading">Join Our Newsletter </h1>
        <input class="input-newsletter" type="text" placeholder="Please Enter Your Email" required>
        <button class="button">Subscribe</button>
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
  .Newsletter{
    background-color:rgba(255, 120, 0, 1) ;
    text-align: center;
    padding: 10px;
    margin-top: 4%;
    border-radius: 20px;
    padding-bottom: 2%;
  }

  .Newsletter-heading{
    color: white;
    font-weight: 700;
  }
  .input-newsletter{
  width: 50%;
  height: 20%;
  padding: 10px 10px; 
  font-size: 16px;
  border: 2px solid rgba(200,200,200,0.5);
  border-radius: 8px;
  outline: none;
}
.button{
  padding: 13px 15px;
  background-color: rgb(219, 103, 49);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;
}
</style>