<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/menu">Menu</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <small>&copy; 2025 Fukuoka Gyoza Fess</small>
    </footer>
  </div>
</template>

<script setup></script>

<style scoped>
body{
  background-color: #fff;
}
</style>