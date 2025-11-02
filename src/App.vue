<template>
  <div id="app">
    <Header></Header>
    <main>
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
body {
  background-color: #fff;
}
</style>