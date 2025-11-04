<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import items from '../data/items.json';
import MenuList from '../components/MenuList.vue'

const route = useRoute();
onMounted(()=>{
  // console.log(route.params.id)
})

</script>

<template>
  <div class="container">
    <p class="page-titel">menu</p>
    <div>
          <MenuList :isDetail="true" :itemId="route.params.id"></MenuList>
    </div>
    <router-link to="/menu">一覧に戻る</router-link>
  </div>
</template>
