<template>
  <HeaderComponent/>
  <main>
    <router-view></router-view>
  </main>
  <FooterComponent/>
</template>

<script setup>
import FooterComponent from './components/Footer-component.vue';
import HeaderComponent from './components/Header-component.vue';


</script>