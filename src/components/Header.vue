<template>
  <header>
    <div class="container">
      <div class="header-inner">
        <h1 class="logo" v-if="route.name === 'Home'"><router-link to="/"><img src="/images/logo.svg" alt="ふくおか餃子フェス"></router-link></h1>
        <p class="logo" v-else><router-link to="/"><img src="/images/logo.svg" alt="ふくおか餃子フェス"></router-link></p>
        <Nav></Nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import Nav from './Nav.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style scoped>
.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 60px;
}
</style>