<template>
    <WelcomeComponent/>
    <CardComponent  :productListData="dataArray"/>
    <NewsLetterComponent/>
</template>

<script setup>
import CardComponent from '@/components/Card-component.vue';
import NewsLetterComponent from '@/components/NewsLetter-component.vue';
import WelcomeComponent from '@/components/Welcome-component.vue';
import { ref } from 'vue';
const dataArray = ref([{img:'https://i.pinimg.com/736x/72/b5/a1/72b5a16458ea71865ecc8189a3bf42eb.jpg', title:'Finger fries', subtitle:'Crispy', price:'12'}])

</script>