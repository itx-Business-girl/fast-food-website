<template>
  <div class="img">
    
    <div class="top-text">
      <h1 class="h1">Contact <strong class="h1-strong">Us</strong></h1>
      <p class="p">We're Here to Help You!</p>
    </div>

    <div class="bottom-section">
      
      <div class="div1">
        <h2>Get In Touch</h2>
        <hr>
        <p><strong class="h1-strong">Contact:</strong> 1234567890</p>
        <p><strong class="h1-strong">Email:</strong> quickbite.com</p>
        <p><strong class="h1-strong">Visit Us:</strong>123 Main Street, Your City</p>
        <a href=""><i class="fa-brands fa-instagram icons"></i></a>
        <a href=""><i class="fa-brands fa-twitter icons"></i></a>
        <a href=""><i class="fa-brands fa-tiktok icons"></i></a>
      </div>

      <div class="div2">
        <h2>Send Us a Message</h2>
        <hr>
        <input class="input-placeholder" type="text" placeholder="Your Name">
        <input class="input-placeholder" type="email" placeholder="Your Email">
        <input class="input-placeholder" type="text" placeholder="Subject">
        <textarea class="textarea" placeholder="Your Message"></textarea>
        <button class="button button:hover">send Message!</button>
      </div>
    </div>
  
  </div>
  
</template>

<style scoped>
*{
    margin: 0%;
    padding: 0%;
}
 .img {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/contact.png');
  min-height: 100vh;
  padding-bottom: 50px;
  position: relative;
  background-size: cover;
  background-position: center;
}
hr{
   background-color: rgb(128, 114, 61);
    height: 0.1px;
    margin: 10px 0;
}
.top-text {
  text-align: center;
  padding-top: 50px;
}
.h1 {
  color: white;
  font-size: 37px;
}

.h1-strong {
  color: rgba(255, 102, 0, 1);
}

.p {
  color: white;
  margin-top: 1%;
}


.bottom-section {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 80px;
}

.div1{
  background-color: rgba(0,0,0,0.6);
  color: white;
  width: 200px;
  padding: 40px 7px;
  text-align: center;
  height: 90%;
  border-radius: 7px;
  border: 1px dashed rgb(156, 134, 73);
   
}
 .div2{
  background-color: rgba(0,0,0,0.6);
  color: white;
  width: 250px;
  height: 20%;
  padding:26px 30px;
  text-align: center;
  border-radius: 7px;
}

.input-placeholder{
  width: 100%;
  margin-top: 10px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color:  rgba(109, 108, 108, 0.6);
    backdrop-filter: blur(2px);
    color: black;
    font-weight: 600;
 } 
 .textarea{
    background-color:rgba(102, 101, 101, 0.6) ;
    height: 200%;
    width: 100%;
    padding: 2%;
    color: rgb(255, 253, 253);
    font-weight: 700;
    border-radius: 5px;
    margin-top: 10%;
 }
 .icons{
    color:rgba(255, 102, 0, 1);
    font-size: 19px;
    margin: 2%;
    margin-top: 9%;
 }
 .button{
    background-color:rgba(255, 102, 0, 1);
    padding: 10px 10px;
    cursor: pointer;
    border-radius: 7px;
    color: white;
    border: none;
    margin-top: 4%;
    font-weight: 540;
    font-size: 14px;
    width: 50%;
 }
 .button:hover{
  background-color: rgb(219, 130, 70);
  box-shadow:0 2px 10px rgb(128, 114, 61,0.8) ;
  color: white;
 }
.contact{
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    gap: 10px;
}



</style>