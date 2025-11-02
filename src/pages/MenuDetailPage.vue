<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import items from '../data/items.json';

const route = useRoute();
const item = ref(null);

onMounted(() => {
  const id = Number(route.params.id);
  item.value = items.find(item => item.id === id)
})
</script>

<template>
  <div class="container">
    <div v-if="item">
      <h1 class="page-title">{{ item.menuName }}</h1>
    </div>
    <div v-else>
      <p>メニューがありません。</p>
    </div>
    <router-link to="/menu">一覧に戻る</router-link>
  </div>
</template>
