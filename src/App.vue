<template>
  <HeaderComponent @onChangeSearchBox="textChange" />
  <main>
    <router-view/>
  </main>
  <FooterComponent/>
</template>

<script setup>
import FooterComponent from './components/Footer-component.vue';
import HeaderComponent from './components/Header-component.vue';
import { useGlobelStore } from '@/store/globel.js'

const store = useGlobelStore()

const textChange = (data)=>{
store.search = data
store.onSearch(data)

}


</script>