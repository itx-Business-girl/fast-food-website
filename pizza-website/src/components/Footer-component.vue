<template>
<footer class="footer">

  <!-- 🔹 TOP ROW -->
  <div class="footer-top">

    <div class="footer-col">
      <h1>Quick Bite</h1>
      <p>Delicious meals delivered fast.</p>
    </div>

    <div class="footer-col">
      <p>Email: info@quickbite.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: 123 Main Street</p>
    </div>

  </div>

  <!-- 🔹 BOTTOM ROW -->
  <div class="footer-bottom">

    <div class="footer-box">
      <i class="fa-solid fa-location-dot icon"></i>
      <h4>123 Main Street,</h4>
      <p>Your City Your Country</p>
    </div>

    <div class="footer-box">
      <i class="fa-solid fa-clock icon"></i>
      <h4>Opening Hours:</h4>
      <p>Mon-Fri: 10AM–11PM</p>
      <p>Sat-Sun: 11AM–12AM</p>
    </div>

    <div class="footer-box">
      <i class="fa-solid fa-motorcycle icon"></i>
      <h4>Fast Delivery:</h4>
      <p>Order online & get it fast</p>
      <p>Delivered Hot!</p>
    </div>

  </div>

  <p class="copy">© 2026 Quick Bite. All rights reserved.</p>

  <!--  SOCIAL-icons -->
  <div class="social">
    <i class="fa-brands fa-instagram social icon"></i>
    <i class="fa-brands fa-youtube social icon"></i>
    <i class="fa-brands fa-tiktok social icon"></i>
  </div>

</footer>
</template>
<style>
   .footer {
  background-color: rgba(92, 18, 10, 1); 
  color: white;
  text-align: center;
  padding: 1%;
  border-radius: 20px 20px 0px 0px; 
  margin-top: 2%;
}
  .footer {
  background-color: rgba(92, 18, 10, 1);
  color: white;
  text-align: center;
  padding: 1%;
  border-radius: 20px 20px 0px 0px; 
  margin-top: 2%;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.footer-col {
  flex: 1;
  min-width: 180px;
  text-align: center;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

/* BOTTOM ROW */
.footer-bottom {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 20px 0;
}

/* BOX STYLE */
.footer-box {
  text-align: center;
}

/* ICONS */
.icon {
  font-size: 24px;
  color: rgba(255,102,0,1);
  margin-bottom: 8px;
}
</style>