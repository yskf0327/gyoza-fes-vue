<template>
  <header>
    <h1 class="logo" v-if="route.name === 'Home'"><a href="/"><img src="/images/logo.svg" alt="ふくおか餃子フェス"></a></h1>
    <p class="logo" v-else><a href="/"><img src="/images/logo.svg" alt="ふくおか餃子フェス"></a></p>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>