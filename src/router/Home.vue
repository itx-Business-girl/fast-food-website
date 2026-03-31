<template>
    <WelcomeComponent/>
    <CardComponent  :productListData="store.getArrayData"/>
    <NewsLetterComponent/>
</template>

<script setup>
import CardComponent from '@/components/Card-component.vue';
import NewsLetterComponent from '@/components/NewsLetter-component.vue';
import WelcomeComponent from '@/components/Welcome-component.vue';

import { ref } from 'vue';
import { useGlobelStore } from '@/store/globel.js'
const store = useGlobelStore()
</script>